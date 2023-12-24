import { z } from "zod";

export const createComplaintSchema = z.object({
  date: z.date({
    required_error: "La fecha es requerida.",
  }),
  email: z
    .string({
      required_error: "El correo es requerido.",
    })
    .email({
      message: "Correo inválido.",
    }),
  colony: z
    .string({
      required_error: "El número es requerido.",
    })
    .min(6, {
      message: "La colonia debe tener al menos 5 caracteres.",
    }),
  pcode: z
    .string({
      required_error: "El código postal es requerido.",
    })
    .min(6, {
      message: "El código postal debe tener un mínimo y máximo de 6 digitos.",
    })
    .max(6, {
      message: "El código postal debe tener un mínimo y máximo de 6 digitos.",
    }),
  street: z
    .string({
      required_error: "La calle es requerida.",
    })
    .min(6, {
      message: "La calle debe tener al menos 6 caracteres.",
    }),
  outnumber: z.string({
    required_error: "El núm. exterior es requerido.",
  }),
  innumber: z.string({
    required_error: "El núm. interior es requerido.",
  }),
  staffname: z
    .string({
      required_error: "El nombre del servidor público es requerido.",
    })
    .min(6, {
      message:
        "El nombre del servidor público debe tener al menos 6 caracteres.",
    }),
  staffcharge: z
    .string({
      required_error: "El cargo/puesto del servidor público es requerido.",
    })
    .min(6, {
      message:
        "El cargo/puesto del servidor público debe tener al menos 6 caracteres.",
    }),
  staffarea: z.string({
    required_error: "El área del servidor público es requerido.",
  }),
  commentsCitizen: z.string({
    required_error: "Es necesario una explicación de los hechos.",
  }),
  image: z.unknown({
    required_error: "Una imagen es requerida.",
  }),
});
