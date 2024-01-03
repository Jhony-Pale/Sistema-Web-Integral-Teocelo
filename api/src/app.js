import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { validateRol } from "./middlewares/rol.middleware.js";
import { validateDocument } from "./middlewares/document.middleware.js";
import { authRequired } from "./middlewares/validateToken.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import lampRoutes from "./routes/lamp.routes.js";
import waterRoutes from "./routes/water.routes.js";
import natureRoutes from "./routes/nature.routes.js";
import complaintRoutes from "./routes/complaint.routes.js";
import officialRoutes from "./routes/official.routes.js";
import emailRoutes from "./routes/email.routes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/public/images", express.static(join(__dirname, "public/images")));
app.use(
  "/public/documentos",
  authRequired,
  validateRol(["employee.dw", "citizen"]),
  validateDocument(),
  express.static(join(__dirname, "public/documents"))
);

app.use("/api", authRoutes);
app.use("/api", postRoutes);
app.use("/api", lampRoutes);
app.use("/api", waterRoutes);
app.use("/api", natureRoutes);
app.use("/api", complaintRoutes);
app.use("/api", emailRoutes);
app.use("/api", officialRoutes);

export default app;
