import { Router } from "express";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { validateRol } from "../middlewares/rol.middleware.js";
import { authRequired } from "../middlewares/validateToken.js";
import {
  createNature,
  updateNature,
  getNatureCattle,
  getNatureAgricultural,
  getNatureBamboo
} from "../controllers/nature.controller.js";
import {
  createNatureSchema,
  updateNatureSchema
} from "../schemas/nature.schema.js";

const router = Router();

router.get(
  "/naturecattle",
  authRequired,
  validateRol("employee.es"), /* es -> environmental staff */
  getNatureCattle
);
router.get(
  "/natureagricultural",
  authRequired,
  validateRol("employee.es"),
  getNatureAgricultural
);
router.get(
  "/naturebamboo",
  authRequired,
  validateRol("employee.es"),
  getNatureBamboo
);
router.post(
  "/nature",
  authRequired,
  validateRol("citizen"),
  validateSchema(createNatureSchema),
  createNature
);
router.put(
  "/nature/:id",
  authRequired,
  validateRol("employee.es"),
  validateSchema(updateNatureSchema),
  updateNature
);

export default router;
