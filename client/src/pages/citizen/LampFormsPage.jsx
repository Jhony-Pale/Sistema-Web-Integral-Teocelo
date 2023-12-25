import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { useExtaData } from "../../context/ExtraDataContext";
import { useLamps } from "../../context/LampContext";
import { useNavigate } from "react-router-dom";
import { Collapse } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import InputSelect from "../../components/InputSelect";
import HeaderTittle from "../../components/HeaderTittle";

const options = ["LED", "Antigua", "Cucharón"];

function LampFormsPage({ type }) {
  const { user } = useAuth();
  const { isMobile } = useExtaData();
  const {
    createLampRequest,
    createLampReport,
    errors: createLampErrors,
  } = useLamps();
  const [collapseErrors, setCollapseErrors] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    if (type === "request") {
      const res = await createLampRequest(data);
      if (res) navigate("/perfile");
    } else {
      const res = await createLampReport(data);
      if (res) navigate("/perfile");
    }
  });

  const onOptionChange = (op) => {
    setValue("typeLamp", op);
  };

  useEffect(() => {
    if (createLampErrors.length > 0) {
      setCollapseErrors(true);

      const timer = setTimeout(() => {
        setCollapseErrors(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [createLampErrors]);

  return (
    <div className="bg-white pt-6 pb-8 mt-5">
      <HeaderTittle
        title={
          type === "request"
            ? "Solicitud para la instalación de una lámpara"
            : "Reportar luminaria descompuesta"
        }
      />
      <div className="m-10">
        <Collapse open={collapseErrors}>
          <div>
            {createLampErrors.map((error, i) => (
              <AlertMessage key={i} message={error} />
            ))}
          </div>
        </Collapse>
      </div>
      <form onSubmit={onSubmit} className="mx-24 my-10 flex flex-col gap-10">
        <div className="flex items-center">
          <hr className="flex-1 border-t border-black border" />
          <span className="px-4 text-center font-montserrat font-bold text-black text-xl lg:text-3xl">
            Datos personales
          </span>
          <hr className="flex-1 border-t border-black border" />
        </div>
        <div className="flex flex-wrap w-full gap-10 mb-10">
          <div className="grow">
            <label className="font-montserrat font-bold text-lg lg:text-2xl text-black">
              Nombre(s):
            </label>
            <input
              type="text"
              placeholder="Nombre(s)"
              value={user.firstname}
              className="w-full text-black font-montserrat font-medium text-base lg:text-xl px-4 py-2 rounded-md border-2 border-black"
              disabled
            />
          </div>
          <div className="grow">
            <label className="font-montserrat font-bold text-lg lg:text-2xl text-black">
              Apellidos(s):
            </label>
            <input
              type="text"
              placeholder="Apellidos"
              value={user.lastname}
              className="w-full text-black font-montserrat font-medium text-base lg:text-xl px-4 py-2 rounded-md border-2 border-black"
              disabled
            />
          </div>
          <div className="grow">
            <label className="font-montserrat font-bold text-lg lg:text-2xl text-black">
              Teléfono:
            </label>
            <input
              type="text"
              placeholder="Teléfono"
              value={user.phonenumber ?? "2255114422"}
              className="w-full text-black font-montserrat font-medium text-base lg:text-xl px-4 py-2 rounded-md border-2 border-black"
              disabled
            />
          </div>
        </div>

        <div className="flex items-center">
          <hr className="flex-1 border-t border-black border" />
          <span className="px-4 text-center font-montserrat font-bold text-black text-xl lg:text-3xl">
            Ubicación
          </span>
          <hr className="flex-1 border-t border-black border" />
        </div>
        <div className="flex flex-wrap w-full gap-10 mb-10">
          <div className="grow relative">
            <label className="font-montserrat font-bold text-lg lg:text-2xl text-black">
              Calle:
            </label>
            <input
              type="text"
              placeholder="Calle"
              {...register("street", { required: true })}
              className="w-full text-black font-montserrat font-medium text-base lg:text-xl px-4 py-2 rounded-md border-2 border-black"
            />
            {errors.street && (
              <p className="text-red-500 absolute -bottom-6">
                La calle es requerida.
              </p>
            )}
          </div>
          <div className="w-min grow relative">
            <label className="font-montserrat font-bold text-lg lg:text-2xl text-black">
              Número:
            </label>
            <input
              type="text"
              placeholder="Número"
              {...register("number", { required: true })}
              className={`w-full text-black font-montserrat font-medium text-base lg:text-xl px-4 py-2 rounded-md border-2 ${
                errors.number && isMobile
                  ? "border-red-500 placeholder-red-500"
                  : "border-black placeholder-blue-gray-"
              }`}
            />
            {errors.number && !isMobile && (
              <p className="text-red-500 absolute -bottom-6">
                El número es requerido.
              </p>
            )}
          </div>
          <div className="grow relative">
            <label className="font-montserrat font-bold text-lg lg:text-2xl text-black">
              Colonia:
            </label>
            <input
              type="text"
              placeholder="Colonia"
              {...register("colony", { required: true })}
              className="w-full text-black font-montserrat font-medium text-base lg:text-xl px-4 py-2 rounded-md border-2 border-black"
            />
            {errors.colony && (
              <p className="text-red-500 absolute -bottom-6">
                La colonia es requerida.
              </p>
            )}
          </div>
          <div className="grow relative">
            <label className="font-montserrat font-bold text-lg lg:text-2xl text-black">
              Localidad:
            </label>
            <input
              type="text"
              placeholder="Localidad"
              {...register("town", { required: true })}
              className="w-full text-black font-montserrat font-medium text-base lg:text-xl px-4 py-2 rounded-md border-2 border-black"
            />
            {errors.town && (
              <p className="text-red-500 absolute -bottom-6">
                La localidad es requerida.
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-10">
          <div className="grow w-min">
            <p className="px-4 text-center font-montserrat font-bold text-black text-xl lg:text-3xl">
              {type === "request" ? "Comentarios adicionales" : "Referencia"}
            </p>
            <div className="flex justify-center w-full">
              <textarea
                {...register("commentsCitizen", { required: false })}
                className="text-black px-4 py-2 rounded-md border border-black resize-none shadow w-full lg:w-2/3"
                placeholder={
                  type === "request"
                    ? "Referencia, motivo de la solicitud, etc."
                    : "Información que ayude a ubicar más rápido la lámpara reportada."
                }
                rows={8}
              ></textarea>
            </div>
          </div>
          {type === "report" && (
            <div className={isMobile ? "grow" : ""}>
              <label className="font-montserrat font-bold text-lg lg:text-2xl text-black">
                Tipo de lámpara
              </label>
              <InputSelect
                options={options}
                register={register}
                registerName="typeLamp"
                onOptionChange={onOptionChange}
              />
            </div>
          )}
        </div>

        <motion.div
          className="w-72 flex self-center"
          whileTap={{ scale: 0.95 }}
        >
          <div className="bg-white border-[#6d1610] border-2 p-1 rounded-full w-full">
            <button
              className="bg-[#6d1610] text-white rounded-full font-montserrat text-xl lg:text-3xl py-1 px-5 w-full"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </motion.div>
      </form>
    </div>
  );
}

export default LampFormsPage;
