import { Router } from "express";
import {
  createComplaint,
  getComplaints,
} from "../controllers/complaint.controller.js";
import { createComplaintSchema } from "../schemas/complaint.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { validateRol } from "../middlewares/rol.middleware.js";
import { authRequired } from "../middlewares/validateToken.js";
import multer from "multer";
import path from "path";

const router = Router();

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
  destination: (req, file, cb) => {
    cb(null, "src/public/images");
  },
});

const upload = multer({
  storage: storage,
});

router.get(
  "/complaints",
  authRequired,
  validateRol("employee.cs"), /* cs -> complaint staff */
  getComplaints
);
router.post(
  "/complaints",
  authRequired,
  validateRol("employee.cs"),
  upload.single("image"),
  validateSchema(createComplaintSchema),
  createComplaint
);

export default router;
