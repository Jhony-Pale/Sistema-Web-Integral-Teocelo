import { z } from "zod";

export const createOrUpdateTeamSchema = z.object({
  type: z
    .literal("Femenil")
    .or(z.literal("Libre"))
    .or(z.literal("Infantil"))
    .default("Libre"),
  position: z.number({
    required_error: "La posición es requerida.",
  }),
  teamname: z
    .string({
      required_error: "El nombre del equipo es requerido.",
    })
    .max(50, {
      message: "El nombre del equipo debe tener un máximo de 50 caracteres.",
    }),
  plays: z.number({
    required_error: "La posición es requerida.",
  }),
  wins: z.number({
    required_error: "La posición es requerida.",
  }),
  draws: z.number({
    required_error: "La posición es requerida.",
  }),
  losses: z.number({
    required_error: "La posición es requerida.",
  }),
  goalsfavor: z.number({
    required_error: "La posición es requerida.",
  }),
  goalsagainst: z.number({
    required_error: "La posición es requerida.",
  }),
  goaldifference: z.number({
    required_error: "La posición es requerida.",
  }),
  points: z.number({
    required_error: "La posición es requerida.",
  }),
});
