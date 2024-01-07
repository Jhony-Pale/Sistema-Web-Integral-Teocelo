import { Router } from "express";
import {
  createUpdateTeam,
  getTeams,
  deleteTeam
} from "../controllers/soccer.controller.js";
import { createOrUpdateTeamSchema } from "../schemas/soccer.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { validateRol } from "../middlewares/rol.middleware.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/soccerteams", getTeams);
router.post(
  "/soccerteams",
  authRequired,
  validateRol("employee.sp") /* sports promotion */,
  validateSchema(createOrUpdateTeamSchema),
  createUpdateTeam
);
router.delete(
  "/soccerteams/:id",
  authRequired,
  validateRol("employee.sp"),
  deleteTeam
);

export default router;
