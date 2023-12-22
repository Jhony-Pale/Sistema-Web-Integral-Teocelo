import { z } from "zod";

export const createNatureSchema = z.object({
  typeRequest: z
    .literal("cattle")
    .or(z.literal("agricultural"))
    .or(z.literal("bamboo"))
    .or(z.literal("error"))
    .default("error"),
  commentsCitizen: z.string().default(""),
  commentsEmployee: z.string().default(""),
  status: z.string().default("Entregada"),
});

export const updateNatureSchema = z.object({
  commentsEmployee: z.string().default("Ninguno."),
  status: z
    .literal("Entregada")
    .or(z.literal("En revisión"))
    .or(z.literal("Aceptada"))
    .or(z.literal("Rechazada")),
});
