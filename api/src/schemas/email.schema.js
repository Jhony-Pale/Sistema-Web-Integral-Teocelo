import { z } from "zod";

export const emailData = z.object({
  fullname: z
    .string({
      required_error: "El nombre es requerido.",
    })
    .min(6, "El campo nombre debe tener un mínimo de 6 caracteres.")
    .max(50, {
      message: "El campo nombre debe tener un máximo de 25 caracteres.",
    }),
  email: z
    .string({
      required_error: "El correo es requerido.",
    })
    .email({
      message: "Correo inválido.",
    })
    .max(50, {
      message: "El correo electrónico debe tener un máximo de 50 caracteres.",
    }),
  subject: z
    .string({
      required_error: "El asunto es requerido.",
    })
    .min(6, {
      message: "El asunto debe de tener al menos 6 caracteres.",
    })
    .max(40, { message: "El asunto debe tener un máximo 40 caracteres." }),
  message: z
    .string({
      required_error: "El mensaje es requerido.",
    })
    .min(6, {
      message: "El mensaje debe de tener al menos 6 caracteres.",
    })
    .max(500, { message: "El mensaje debe tener un máximo 500 caracteres." }),
});
