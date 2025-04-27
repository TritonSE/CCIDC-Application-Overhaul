"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const driveRoutes_1 = __importDefault(require("./routes/driveRoutes"));
const formRoutes_1 = __importDefault(require("./routes/formRoutes"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: JSON.parse((_a = process.env.LOGIN_ORIGINS) !== null && _a !== void 0 ? _a : "[]"),
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/file", driveRoutes_1.default);
app.use("/", loginRoutes_1.default);
app.use("/form", formRoutes_1.default);
const PORT = (_b = process.env.PORT) !== null && _b !== void 0 ? _b : 3000;
const server = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
server.timeout = 240000;
