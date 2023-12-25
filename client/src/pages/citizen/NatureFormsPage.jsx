import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Collapse } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNature } from "../../context/NatureContext";
import HeaderTittle from "../../components/HeaderTittle";

function NatureFormsPage({ type }) {
  const { user } = useAuth();
  const { createNature, errors: createNatureErrors } = useNature();
  const [collapseErrors, setCollapseErrors] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const res = await createNature(data);
    if (res) navigate("/perfile");
  });

  useEffect(() => setValue("typeRequest", type), []);

  useEffect(() => {
    if (createNatureErrors.length > 0) {
      setCollapseErrors(true);

      const timer = setTimeout(() => {
        setCollapseErrors(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [createNatureErrors]);

  return (
    <div className="bg-white pt-6 pb-8 mt-5">
      <HeaderTittle
        title={
          type === "cattle"
            ? "Solicitud para constancia de acreditación ganadera"
            : type === "agricultural"
            ? "Solicitud para constancia agrícola "
            : "Solicitud para guía de traslado de bambú"
        }
      />
      <div className="m-10">
        <Collapse open={collapseErrors}>
          <div>
            {createNatureErrors.map((error, i) => (
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

        <div className="flex flex-col gap-5 w-full self-center">
          <div className="flex flex-col gap-5 bg-[#EFEFEF] rounded-xl font-montserrat px-10 py-5">
            <h1 className="font-bold text-lg lg:text-2xl text-center">
              Por favor, llene el siguiente formulario para completar su
              solicitud:
            </h1>
            <motion.div
              className="w-72 flex self-center justify-center"
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://www.figma.com/file/tzRour6btc5Duf65ETFYVB/Proyecto?type=design&node-id=651-1557&mode=design&t=O9vWPrBWWhbqSVUT-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-[#6d1610] text-white rounded-full text-xl lg:text-3xl py-1 px-5 w-full"
                  type="button"
                >
                  Formulario
                </button>
              </a>
            </motion.div>
          </div>
          <p>
            {type === "cattle" &&
              "Es necesario que tenga a la mano una copia de su UPP (sólo en caso de bovinos) y una copia de su comprobante de domicilio."}
            {type === "agricultural" &&
              "Es necesario que tenga a la mano una copia de su INE, copia de comprobante de domicilio y copia de algún documento que acredite la posesión de la tierra."}
            {type === "bamboo" &&
              "Es necesario que tenga a la mano una copia de su INE, comprobante de domicilio, cedula de empadronamiento y credencial de artesano. Además, copia de INE del chófer, así como copia de su licencia de manejo y tarjeta de circulación del vehículo."}
          </p>
        </div>

        <div className="flex items-center">
          <hr className="flex-1 border-t border-black border" />
          <span className="px-4 text-center font-montserrat font-bold text-black text-xl lg:text-3xl">
            Comentarios
          </span>
          <hr className="flex-1 border-t border-black border" />
        </div>
        <div className="w-full">
          <div className="flex justify-center w-full">
            <textarea
              {...register("commentsCitizen", { required: false })}
              className="text-black px-4 py-2 rounded-md border border-black resize-none shadow w-full lg:w-2/3"
              placeholder="Opcional..."
              rows={8}
            ></textarea>
          </div>
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

export default NatureFormsPage;
