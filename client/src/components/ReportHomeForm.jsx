import { useForm } from "react-hook-form";
import { useEmail } from "../context/EmailCOntext";
import { useState } from "react";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DialogMessage from "../components/DialogMessage";
import AlertMessage from "./AlertMessage";

function ReportHomeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { errors: sendErrors, sendEmail } = useEmail();
  const [open, setOpen] = useState(false);
  const formRef = useRef();

  const handleOpen = () => setOpen((prev) => !prev);

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await sendEmail(data);

      if (sendErrors && res.status !== 400) return handleOpen();

      if (res.status === 200) formRef.current.reset();
    } catch (error) {}
  });

  const handleAction = (opc) => {
    setOpen(false);
  };

  return (
    <div>
      <div className="font-extrabold text-center text-4xl pt-5 pb-20 mt-5 lg:mt-0">
        ATENCIÓN CIUDADANA
      </div>
      <div className="flex flex-col items-center justify-center mx-14 lg:mx-0">
        <div className="overflow-hidden w-full lg:w-[60%]">
          <AnimatePresence mode="sync">
            {sendErrors.map((error, i) => (
              <motion.div
                key={i}
                initial={{ height: 0, y: -10, opacity: 0 }}
                animate={{ height: 48, y: 0, opacity: 1 }}
                exit={{ height: 0, y: -10, opacity: 0 }}
                transition={{ type: "spring", delay: i * 0.2 }}
                className="mb-2 w-full"
              >
                <AlertMessage key={i} message={error} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full lg:w-[60%]"
          ref={formRef}
        >
          <div className="flex flex-col bg-[#EFEEEE] rounded-xl p-4">
            <div className="mb-11">
              <span className="font-bold text-xl font-serif">
                Nombre completo:
              </span>
              <input
                type="text"
                placeholder=""
                {...register("fullname", {
                  required: "Se requiere el nombre",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Solo se permiten letras, números y espacios",
                  },
                  maxLength: {
                    value: 50,
                    message: "No debe exceder los 50 caracteres",
                  },
                  minLength: {
                    value: 6,
                    message: "Debe tener al menos 6 caracteres",
                  },
                })}
                maxLength={50}
                minLength={6}
                className={`w-full text-black px-4 py-2 rounded-md border-2 h-10 focus:outline-none ${
                  errors.fullname ? "border-red-500" : "border-black"
                }`}
              />
              {errors.fullname && (
                <p className="text-red-500">{errors.fullname.message}</p>
              )}
            </div>
            <div className="mb-11">
              <span className="font-bold text-xl font-serif">
                Correo electrónico:
              </span>
              <input
                type="email"
                placeholder=""
                {...register("email", {
                  required: "Se requiere el correo electrónico",
                  maxLength: {
                    value: 50,
                    message: "No debe exceder los 50 caracteres",
                  },
                })}
                maxLength={50}
                className={`w-full text-black px-4 py-2 rounded-md border-2 h-10 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-black"
                }`}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-11">
              <span className="font-bold text-xl font-serif">Asunto:</span>
              <input
                type="text"
                placeholder=""
                {...register("subject", {
                  required: "Se requiere un asunto",
                  pattern: {
                    value: /^[a-zA-Z0-9\s.,¿?]+$/,
                    message:
                      "Solo se permiten letras, números, espacios y los signos (¿ ? , .)",
                  },
                  maxLength: {
                    value: 25,
                    message: "No debe exceder los 25 caracteres",
                  },
                  minLength: {
                    value: 6,
                    message: "Debe tener al menos 6 caracteres",
                  },
                })}
                minLength={6}
                maxLength={25}
                className={`w-full text-black px-4 py-2 rounded-md border-2 h-10 focus:outline-none ${
                  errors.email ? "border-red-500" : "border-black"
                }`}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject.message}</p>
              )}
            </div>
            <div>
              <span className="font-bold text-xl font-serif">Mensaje:</span>
              <textarea
                {...register("message", {
                  required: "Se requiere un mensaje",
                  pattern: {
                    value: /^[a-zA-Z0-9\s.,¿?]+$/,
                    message:
                      "Solo se permiten letras, números, espacios y los signos (¿ ? , .)",
                  },
                  maxLength: {
                    value: 500,
                    message: "No debe exceder los 500 caracteres",
                  },
                  minLength: {
                    value: 6,
                    message: "Debe tener al menos 6 caracteres",
                  },
                })}
                minLength={6}
                maxLength={500}
                className={`w-full text-black px-4 py-2 rounded-md border-2 resize-none focus:outline-none ${
                  errors.message ? "border-red-500" : "border-black"
                }`}
                rows={5}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
          </div>
          <motion.button
            type="submit"
            className="bg-[#6D1610] font-extrabold font-montserrat text-2xl w-[50%] text-white py-2 rounded-3xl self-center mt-8"
            whileHover={{ scale: 1.1 }}
          >
            Enviar
          </motion.button>
        </form>
      </div>
      <DialogMessage
        handleOpen={handleOpen}
        open={open}
        handleAction={handleAction}
        buttonCancel={false}
        title="Aviso"
        message="Hubo un problema enviando el correo. Intentelo más tarde."
      />
    </div>
  );
}

export default ReportHomeForm;
