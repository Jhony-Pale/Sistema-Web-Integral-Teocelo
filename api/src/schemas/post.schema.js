import { z } from "zod";

export const createPostSchema = z.object({
  title: z
    .string({
      required_error: "El título es requerido.",
    })
    .min(6, {
      message: "El título debe tener al menos 6 caracteres.",
    }),
  type: z.string({
    required_error: "Se requiere seleccionar un tipo.",
  }),
  body: z.string({
    required_error: "El cuerpo de la publicación es requerido.",
  }),
});

export const updatePostSchema = z.object({
  title: z
    .string({
      required_error: "El título es requerido.",
    })
    .min(6, {
      message: "El título debe tener al menos 6 caracteres.",
    }),
  type: z.string({
    required_error: "Se requiere seleccionar un tipo.",
  }),
  body: z.string({
    required_error: "El cuerpo de la publicación es requerido.",
  }),
});
