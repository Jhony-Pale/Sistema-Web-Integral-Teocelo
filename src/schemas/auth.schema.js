import { z } from "zod";

export const registerSchema = z.object({
  firstname: z
    .string({
      required_error: "El nombre es requerido.",
    }),
  lastname: z
    .string({
      required_error: "El apellido es requerido.",
    }),
  rol: z
    .string({
      required_error: "Rol is required",
    }).default("citizen"),
  email: z
    .string({
      required_error: "El correo es requerido.",
    })
    .email({
      message: "Correo inválido.",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida.",
    })
    .min(6, {
      message: "La contraseña debe de tener al menos 6 caracteres.",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El correo es requerido.",
    })
    .email({
      message: "Correo inválido.",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida.",
    })
    .min(6, {
      message: "La contraseña debe de tener al menos 6 caracteres.",
    }),
});
