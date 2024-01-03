import { Router } from "express";
import {
  createOfficial,
  updateOfficial,
  getOfficialRequests
} from "../controllers/official.controller.js";
import {
  createOfficialSchema,
  updateOfficialSchema
} from "../schemas/official.schema.js";
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
    cb(null, "src/public/documents");
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten archivos PDF'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

router.get(
  "/officialrequests",
  authRequired,
  validateRol("employee.op"), /* Oficialia de partes */
  getOfficialRequests
);
router.post(
  "/official",
  authRequired,
  validateRol("citizen"),
  upload.single("document"),
  validateSchema(createOfficialSchema),
  createOfficial
);
router.put(
  "/official/:id",
  authRequired,
  validateRol("employee.op"),
  upload.single("document"),
  validateSchema(updateOfficialSchema),
  updateOfficial
);

export default router;
