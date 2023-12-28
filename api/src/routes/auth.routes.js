import { Router } from "express";
import {
  login,
  register,
  logout,
  history,
  verifyToken,
  update,
  getUser
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema, updateSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", authRequired, logout);
router.get("/verify", verifyToken);
router.get("/history", authRequired, history);
router.get("/user", authRequired, getUser);
router.put("/update", authRequired, validateSchema(updateSchema), update);

export default router;
