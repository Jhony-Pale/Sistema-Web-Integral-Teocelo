import { z } from "zod";

export const createOfficialSchema = z.object({
  document: z.unknown().nullable(),
  commentsCitizen: z
    .string()
    .max(500, {
      message: "Los comentarios deben tener un máximo de 500 caracteres.",
    })
    .default(""),
  commentsEmployee: z.string().default(""),
  status: z.string().default("Entregada"),
});

export const updateOfficialSchema = z.object({
  commentsEmployee: z
    .string()
    .max(500, {
      message: "Los comentarios deben tener un máximo de 500 caracteres.",
    })
    .default("Ninguno."),
  document: z.unknown().nullable(),
  status: z
    .literal("Entregada")
    .or(z.literal("En revisión"))
    .or(z.literal("Aceptada"))
    .or(z.literal("Rechazada"))
    .default("Entregada"),
});
