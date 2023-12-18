import { Router } from "express";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { validateRol } from "../middlewares/rol.middleware.js";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createLampReports,
  createLampRequests,
  updateLamp,
  getLampReports,
  getLampRequests
} from "../controllers/lamp.controller.js";
import {
  createLampReportsSchema,
  createLampRequestsSchema,
  updateLampSchema,
} from "../schemas/lamp.schema.js";

const router = Router();

router.get(
  "/lamprequests",
  authRequired,
  validateRol("employee.sl"),
  getLampRequests
);
router.get(
  "/lampreports",
  authRequired,
  validateRol("employee.sl"),
  getLampReports
);
router.post(
  "/lamprequests",
  authRequired,
  validateRol("citizen"),
  validateSchema(createLampRequestsSchema),
  createLampRequests
);
router.post(
  "/lampreports",
  authRequired,
  validateRol("citizen"),
  validateSchema(createLampReportsSchema),
  createLampReports
);
router.put(
  "/lamps/:id",
  authRequired,
  validateRol("employee.sl"),
  validateSchema(updateLampSchema),
  updateLamp
);
//router.delete("/posts/:id", authRequired, validateRol("employee.sc"), deletePost);

export default router;
