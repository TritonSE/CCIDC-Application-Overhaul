import dotenv from "dotenv";
import express, { Request, Response, Router } from "express";

dotenv.config();

const router: Router = express.Router();

type LoginBody = {
  username: string;
  password: string;
};

type WordpressLoginResponse = {
  token: string;
  user_display_name: string;
  user_email: string;
  user_nicename: string;
};

class LoginError extends Error {
  status?: number;
  error?: string;

  constructor(status?: number, message?: string) {
    super(message);
    this.status = status;
  }
}

router.post("/login", (req: Request<object, object, LoginBody>, res: Response) => {
  const baseUrl = process.env.WP_API_BASE_URL;
  const endpoint = process.env.WP_API_LOGIN_ENDPOINT;
  const params = new URLSearchParams({
    username: req?.body?.username,
    password: req?.body?.password,
  });
  const URL = `${baseUrl}${endpoint}?${params.toString()}`;

  fetch(URL, {
    method: "POST",
  })
    .then((response) => {
      if (!response.ok) throw new LoginError(403, "Unable to login with given credentials");

      return response.json();
    })
    .then((data: WordpressLoginResponse) => {
      const e = (v: string) => v; // overide url encoding when setting cookies

      res.cookie("token", data.token, {
        sameSite: "none",
        httpOnly: true,
        secure: true,
        encode: e,
      });
      res.cookie("email", data.user_email, { sameSite: "none", secure: true, encode: e });
      res.cookie("nicename", data.user_nicename, { sameSite: "none", secure: true, encode: e });
      res.cookie("displayName", data.user_display_name, {
        sameSite: "none",
        secure: true,
        encode: e,
      });
      res.status(200).json({
        message: "Login succeeded",
      });
    })
    .catch((error) => {
      const loginError = error as LoginError;
      const status = loginError?.status ?? 500;
      const message =
        loginError?.message && loginError?.message !== "" ? loginError?.message : "Login failed";
      res.status(status).json({ message });
    });
});

// Verify Recaptcha token
router.post("/recaptcha/verify", (req: Request, res: Response) => {
  const { captchaValue } = req.body as Record<string, string>;
  fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${captchaValue}`,
    {
      method: "POST",
    },
  )
    .then((response) => {
      if (!response.ok) {
        res.status(500).send("Failed to get Captcha response");
        return;
      }
      response
        .json()
        .then((data) => {
          res.send(data);
        })
        .catch(() => {
          res.status(500).send("Failed to get Captcha response");
        });
    })
    .catch(() => {
      res.status(500).send("Failed to get Captcha response");
    });
});

router.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("token", {
    sameSite: "none",
    httpOnly: true,
    secure: true,
  });
  res.clearCookie("email", { sameSite: "none", secure: true });
  res.clearCookie("nicename", { sameSite: "none", secure: true });
  res.clearCookie("displayName", { sameSite: "none", secure: true });
  res.status(200).send({ message: "Logout succeeded" });
});

router.get("/validate", (req: Request, res: Response) => {
  const cookies: Record<string, string> | undefined = req.cookies;
  const token = cookies && "token" in cookies ? cookies.token : null;
  const baseUrl = process.env.WP_API_BASE_URL;
  const endpoint = process.env.WP_API_VALIDATE_ENDPOINT;
  const URL = `${baseUrl}${endpoint}`;

  fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      res.status(200).json({ isValid: response.ok });
    })
    .catch((error) => {
      const loginError = error as LoginError;
      const status = loginError?.status ?? 500;
      const message =
        loginError?.message && loginError?.message !== ""
          ? loginError?.message
          : "Token verification failed";
      res.status(status).json({ message });
    });
});

export default router;
