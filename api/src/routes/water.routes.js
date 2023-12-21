import { Router } from "express";
import {
  createWaterReports,
  createWaterRequests,
  updateWater,
  getWaterReports,
  getWaterRequests,
} from "../controllers/water.controller.js";
import {
  createWaterReportsSchema,
  createWaterRequestsSchema,
  updateWaterSchema,
} from "../schemas/water.schema.js";
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
  "/waterReports",
  authRequired,
  validateRol("employee.dw"),
  getWaterReports
);
router.get(
  "/waterRequests",
  authRequired,
  validateRol("employee.dw"),
  getWaterRequests
);
router.post(
  "/waterrequests",
  authRequired,
  validateRol("citizen"),
  validateSchema(createWaterRequestsSchema),
  createWaterRequests
);
router.post(
  "/waterreports",
  authRequired,
  validateRol("citizen"),
  validateSchema(createWaterReportsSchema),
  createWaterReports
);
router.put(
  "/water/:id",
  authRequired,
  validateRol("employee.dw"),
  upload.single("document"),
  validateSchema(updateWaterSchema),
  updateWater
);

export default router;
