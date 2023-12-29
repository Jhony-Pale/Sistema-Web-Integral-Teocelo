import { z } from "zod";

export const createLampRequestsSchema = z.object({
  street: z
    .string({
      required_error: "La calle es requerida.",
    })
    .min(6, {
      message: "La calle debe tener al menos 6 caracteres.",
    })
    .max(25, {
      message: "La calle debe tener un máximo de 25 caracteres.",
    }),
  number: z
    .string({
      required_error: "El número es requerido.",
    })
    .max(10, {
      message: "El número debe tener un máximo de 10 caracteres.",
    }),
  colony: z
    .string({
      required_error: "El número es requerido.",
    })
    .min(6, {
      message: "La colonia debe tener al menos 5 caracteres.",
    })
    .max(20, {
      message: "La colonia debe tener un máximo de 20 caracteres.",
    }),
  town: z
    .string({
      required_error: "La localidad es requerida.",
    })
    .min(6, {
      message: "La localidad debe tener al menos 5 caracteres.",
    })
    .max(15, {
      message: "La localidad debe tener un máximo de 15 caracteres.",
    }),
  commentsCitizen: z.string().max(500, {
    message: "Los comentarios deben tener un máximo de 500 caracteres.",
  }).default(""),
  commentsEmployee: z.string().default(""),
  type: z.string().default("request"),
  status: z.string().default("Entregada"),
});

export const createLampReportsSchema = z.object({
  street: z
    .string({
      required_error: "La calle es requerida.",
    })
    .min(6, {
      message: "La calle debe tener al menos 6 caracteres.",
    })
    .max(25, {
      message: "La calle debe tener un máximo de 25 caracteres.",
    }),
  number: z
    .string({
      required_error: "El número es requerido.",
    })
    .max(10, {
      message: "El número debe tener un máximo de 10 caracteres.",
    }),
  colony: z
    .string({
      required_error: "El número es requerido.",
    })
    .min(6, {
      message: "La colonia debe tener al menos 5 caracteres.",
    })
    .max(20, {
      message: "La colonia debe tener un máximo de 20 caracteres.",
    }),
  town: z
    .string({
      required_error: "La localidad es requerida.",
    })
    .min(6, {
      message: "La localidad debe tener al menos 5 caracteres.",
    })
    .max(15, {
      message: "La localidad debe tener un máximo de 15 caracteres.",
    }),
  commentsCitizen: z.string().max(500, {
    message: "Los comentarios deben tener un máximo de 500 caracteres.",
  }).default(""),
  commentsEmployee: z.string().default(""),
  typeLamp: z
    .literal("LED")
    .or(z.literal("Antigua"))
    .or(z.literal("Cucharón"))
    .default("LED"),
  type: z.string().default("report"),
  status: z.string().default("Recibido"),
});

export const updateLampSchema = z.object({
  commentsEmployee: z.string().max(500, {
    message: "Los comentarios deben tener un máximo de 500 caracteres.",
  }).default("Ninguno."),
  status: z
    .literal("Entregada")
    .or(z.literal("En revisión"))
    .or(z.literal("Aceptada"))
    .or(z.literal("Rechazada"))
    .or(z.literal("Recibido"))
    .or(z.literal("Por atender"))
    .or(z.literal("Atendido")),
});
