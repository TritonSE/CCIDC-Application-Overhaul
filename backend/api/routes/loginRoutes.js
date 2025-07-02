"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const router = express_1.default.Router();
class LoginError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
router.post("/login", (req, res) => {
    var _a, _b;
    const baseUrl = process.env.WP_API_BASE_URL;
    const endpoint = process.env.WP_API_LOGIN_ENDPOINT;
    const params = new URLSearchParams({
        username: (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.username,
        password: (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.password,
    });
    const URL = `${baseUrl}${endpoint}?${params.toString()}`;
    fetch(URL, {
        method: "POST",
    })
        .then((response) => {
        if (!response.ok)
            throw new LoginError(403, "Unable to login with given credentials");
        return response.json();
    })
        .then((data) => {
        const e = (v) => v; // overide url encoding when setting cookies
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
        var _a;
        const loginError = error;
        const status = (_a = loginError === null || loginError === void 0 ? void 0 : loginError.status) !== null && _a !== void 0 ? _a : 500;
        const message = (loginError === null || loginError === void 0 ? void 0 : loginError.message) && (loginError === null || loginError === void 0 ? void 0 : loginError.message) !== "" ? loginError === null || loginError === void 0 ? void 0 : loginError.message : "Login failed";
        res.status(status).json({ message });
    });
});
// Verify Recaptcha token
router.post("/recaptcha/verify", (req, res) => {
    const { captchaValue } = req.body;
    fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_SECRET}&response=${captchaValue}`, {
        method: "POST",
    })
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
router.post("/logout", (req, res) => {
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
router.get("/validate", (req, res) => {
    const cookies = req.cookies;
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
        var _a;
        const loginError = error;
        const status = (_a = loginError === null || loginError === void 0 ? void 0 : loginError.status) !== null && _a !== void 0 ? _a : 500;
        const message = (loginError === null || loginError === void 0 ? void 0 : loginError.message) && (loginError === null || loginError === void 0 ? void 0 : loginError.message) !== ""
            ? loginError === null || loginError === void 0 ? void 0 : loginError.message
            : "Token verification failed";
        res.status(status).json({ message });
    });
});
exports.default = router;
