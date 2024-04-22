import cors from "cors";
import express, { Request, Response, Router } from "express";

const router: Router = express.Router();
const corsOptions = {
  origin: ["http://localhost:5173", "https://ccidc.org/"],
  credentials: true,
};

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

router.options("/login", cors(corsOptions)); // allows preflight request for /login endpoint

router.post(
  "/login",
  cors(corsOptions),
  (req: Request<object, object, LoginBody>, res: Response) => {
    const baseUrl = "https://ccidc.org";
    const endpoint = "/wp-json/jwt-auth/v1/token";
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

        res.cookie("token", data.token, { httpOnly: true, secure: true, encode: e });
        res.cookie("email", data.user_email, { secure: true, encode: e });
        res.cookie("nicename", data.user_nicename, { secure: true, encode: e });
        res.cookie("displayName", data.user_display_name, { secure: true, encode: e });
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
  },
);

router.post("/logout", cors(corsOptions), (req: Request, res: Response) => {
  res.clearCookie("token");
  res.clearCookie("email");
  res.clearCookie("nicename");
  res.clearCookie("displayName");
  res.status(200).send({ message: "Logout succeeded" });
});

router.get("/validate", cors(corsOptions), (req: Request, res: Response) => {
  const cookies: Record<string, string> | undefined = req.cookies;
  const token = cookies && "token" in cookies ? cookies.token : null;

  const baseUrl = "https://ccidc.org";
  const endpoint = "/wp-json/jwt-auth/v1/token/validate";
  const URL = `${baseUrl}${endpoint}`;

  fetch(URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new LoginError(403, "Unable to verify the given token");

      res.status(200).json({ message: "Token verification succeeded" });
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
