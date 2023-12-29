import { z } from "zod";

export const createComplaintSchema = z.object({
  date: z.coerce.date({
    required_error: "La fecha es requerida.",
    invalid_type_error: "No es una fecha.",
  }),
  firstname: z
    .string({
      required_error: "El nombre es requerido.",
    })
    .max(25, {
      message: "El campo nombre(s) debe tener un máximo de 25 caracteres.",
    }),
  lastnameP: z
    .string({
      required_error: "El apellido paterno es requerido.",
    })
    .max(15, {
      message: "El apellido paterno debe tener un máximo de 15 caracteres.",
    }),
  lastnameM: z
    .string({
      required_error: "El apellido materno es requerido.",
    })
    .max(15, {
      message: "El apellido materno debe tener un máximo de 15 caracteres.",
    }),
  phonenumber: z
    .string({
      required_error: "El número de teléfono es requerido.",
    })
    .length(10, {
      message: "El número de teléfono debe tener 10 dígitos.",
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
  pcode: z
    .string({
      required_error: "El código postal es requerido.",
    })
    .max(10, {
      message: "El código postal debe tener un máximo de 10 caracteres.",
    }),
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
  outnumber: z
    .string({
      required_error: "El núm. exterior es requerido.",
    })
    .max(10, {
      message: "El núm. exterior debe tener un máximo de 10 caracteres.",
    }),
  innumber: z
    .string({
      required_error: "El núm. interior es requerido.",
    })
    .max(10, {
      message: "El núm. interior debe tener un máximo de 10 caracteres.",
    }),
  staffname: z
    .string({
      required_error: "El nombre del servidor público es requerido.",
    })
    .min(6, {
      message:
        "El nombre del servidor público debe tener al menos 6 caracteres.",
    })
    .max(50, {
      message:
        "El nombre del servidor público debe tener un máximo de 50 caracteres.",
    }),
  staffcharge: z
    .string({
      required_error: "El cargo/puesto del servidor público es requerido.",
    })
    .min(6, {
      message:
        "El cargo/puesto del servidor público debe tener al menos 6 caracteres.",
    })
    .max(25, {
      message:
        "El cargo/puesto del servidor público debe tener un máximo de 25 caracteres.",
    }),
  staffarea: z
    .string({
      required_error: "El área del servidor público es requerido.",
    })
    .max(20, {
      message:
        "El área del servidor público debe tener un máximo de 20 caracteres.",
    }),
  commentsCitizen: z
    .string({
      required_error: "Es necesario una explicación de los hechos.",
    })
    .max(800, {
      message: "La explicación debe tener un máximo de 800 caracteres.",
    }),
  image: z.unknown({
    required_error: "Una imagen es requerida.",
  }),
});
