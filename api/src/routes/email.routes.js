import { Router } from "express";
import {
  sendEmail
} from "../controllers/email.controller.js";
import { emailData} from "../schemas/email.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.post(
  "/send-email",
  validateSchema(emailData),
  sendEmail
);

export default router;
