import { Alert } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed, GoAlertFill } from "react-icons/go";
import { useExtaData } from "../context/ExtraDataContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import LogoHorizontal from "../assets/Logos/LogoHorizontal.png";
import EscudoVertical from "../assets/Logos/EscudoVertical.png";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { changeIsLogin } = useExtaData();
  const { signup, errors: registerErrors } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  const showInputPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <div className="grid grid-cols-1 gap-0 h-screen">
        <div className="col-span-1">
          <Link to="/">
            <img
              src={LogoHorizontal}
              alt="Imagen horizontal"
              className="float-left ml-10 my-5 h-24"
            />
            <img
              src={EscudoVertical}
              alt="Imagen vertical"
              className="float-right mr-10 my-5 h-24"
            />
          </Link>
        </div>
        <div className="flex h-[calc(100vh-190px)] items-center justify-center mx-5">
          <div className="w-full lg:w-[80%]">
            <h1
              className={`font-playfair text-red-800 text-6xl text-center ${
                registerErrors.length > 0 ? "mb-10" : "mb-20"
              }`}
            >
              ¡Registrate!
            </h1>
            {registerErrors.map((error, i) => (
              <Alert
                icon={<GoAlertFill size="1.5em" color="red" />}
                className="rounded-none border-l-4 border-[#c92e2e] bg-[#c92e2e]/10 font-medium text-[#c92e2e] mb-2"
                key={i}
              >
                {error}
              </Alert>
            ))}
            <form onSubmit={onSubmit} className="text-center">
              <div className={errors.firstname ? "mb-4" : "mb-8"}>
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("firstname", { required: true })}
                  className="w-full text-black px-4 py-2 rounded-md border-2 border-black"
                />
                {errors.firstname && (
                  <p className="text-red-500">Firstname is required</p>
                )}
              </div>
              <div className={errors.lastname ? "mb-4" : "mb-8"}>
                <input
                  type="text"
                  placeholder="Apellidos"
                  {...register("lastname", { required: true })}
                  className="w-full text-black px-4 py-2 rounded-md border-2 border-black"
                />
                {errors.lastname && (
                  <p className="text-red-500">lastname is required</p>
                )}
              </div>
              <div className={errors.email ? "mb-4" : "mb-8"}>
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  {...register("email", { required: true })}
                  className="w-full text-black px-4 py-2 rounded-md border-2 border-black"
                />
                {errors.email && (
                  <p className="text-red-500">email is required</p>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                  className="w-full text-black pl-4 pr-10 py-2 rounded-md border-2 border-black block"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  {showPassword ? (
                    <GoEyeClosed
                      size="1.5em"
                      onClick={showInputPassword}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      size="1.5em"
                      onClick={showInputPassword}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500">password is required</p>
              )}

              <button
                type="submit"
                className="bg-[#6D1610] font-extrabold text-lg w-[50%] mt-10 text-white px-4 py-2 rounded-md"
              >
                Crear cuenta
              </button>
            </form>
            <span className="text-center">
              <h3 className="mt-5">
                <span className="font-semibold mr-5">
                  ¿Ya tienes una cuenta?
                </span>
                <button
                  onClick={() => changeIsLogin(true)}
                  className="text-orange-300 font-bold"
                >
                  ¡Inicia sesión!
                </button>
              </h3>
            </span>
          </div>
        </div>
        <div className="text-center">
          <span>
            © 2022-2025{" "}
            <span className="text-orange-300"> Gobierno de Teocelo. </span>
            Todos los derechos reservados.
          </span>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
