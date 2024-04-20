import express, { Request, Response, Router } from "express";
import cors from "cors";

const router: Router = express.Router();
const corsOptions = {
  origin: ["http://localhost:5173", "https://ccidc.org/"],
  credentials: true,
};

// needed to allow preflight request for /login endpoint
router.options("/login", cors(corsOptions));

router.post("/login", cors(corsOptions), async (req: Request, res: Response) => {
  const username = req?.body?.username;
  const password = req?.body?.password;

  if (!username || !password) {
    return res.status(403).json({ error: "Missing username or password" });
  }

  const baseUrl = "https://ccidc.org";
  const endpoint = "/wp-json/jwt-auth/v1/token";
  const params = new URLSearchParams({
    username,
    password,
  });
  const URL = `${baseUrl}${endpoint}?${params}`;

  try {
    const response = await fetch(URL, {
      method: "POST",
    });

    if (response.ok) {
      const result = await response.json();

      // overide url encoding on cookies
      const e = (v: string) => v;

      // TODO: verify token here before setting cookie?
      res.cookie("token", result.token, { httpOnly: true, secure: true, encode: e });
      res.cookie("email", result.user_email, { secure: true, encode: e });
      res.cookie("nicename", result.user_nicename, { secure: true, encode: e });
      res.cookie("displayName", result.user_display_name, { secure: true, encode: e });

      return res.status(200).json({
        message: "Login succeeded",
      });
    }

    return res.status(403).json({ error: "Unable to login with given credentials" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "login failed" });
  }
});

router.get("/validate", cors(corsOptions), async (req: Request, res: Response) => {
  const cookies = req.cookies;
  const token = cookies && "token" in cookies ? cookies["token"] : null;
  if (!token) {
    return res.status(403).json({ error: "No token set in cookies" });
  }

  const baseUrl = "https://ccidc.org";
  const endpoint = "/wp-json/jwt-auth/v1/token/validate";
  const URL = `${baseUrl}${endpoint}`;

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return res.status(200).json({ message: "Token verification succeeded" });
    }

    return res.status(403).json({ error: "Unable to verify with given token" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Token verification failed" });
  }
});

export default router;
