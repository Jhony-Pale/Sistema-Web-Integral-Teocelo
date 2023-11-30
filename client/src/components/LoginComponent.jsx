import { Alert, Collapse } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed, GoAlertFill } from "react-icons/go";
import { useExtaData } from "../context/ExtraDataContext";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import LogoHorizontal from "../assets/Logos/LogoHorizontal.png";
import EscudoVertical from "../assets/Logos/EscudoVertical.png";
import { AnimatePresence, motion } from "framer-motion";
import AlertMessage from "./AlertMessage";

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();
  const { changeIsLogin } = useExtaData();
  const [showPassword, setShowPassword] = useState(false);
  const [collapseErrors, setCollapseErrors] = useState(false);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  const showInputPassword = () => setShowPassword(!showPassword);

  useEffect(() => {
    if (signinErrors.length > 0) {
      setCollapseErrors(true);

      const timer = setTimeout(() => {
        setCollapseErrors(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [signinErrors]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-0 h-screen">
        <div className="col-span-1">
          <Link to="/" className="text-orange-300 font-bold">
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
        <div className="col-span-1 flex h-[calc(100vh-190px)] items-center justify-center">
          <div>
            <h1 className="font-playfair text-red-800 text-6xl text-center mb-10">
              ¡Bienvenido!
            </h1>
            <Collapse open={collapseErrors}>
              <div>
                {signinErrors.map((error, i) => (
                  <AlertMessage key={i} message={error} />
                  
                ))}
              </div>
            </Collapse>
            <form className="text-center min-w-[405px]" onSubmit={onSubmit}>
              <div className={errors.email ? "my-5" : "my-10"}>
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  {...register("email", { required: true })}
                  className="w-full text-black px-4 py-2 rounded-md border-2 border-black"
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className={errors.password ? "mb-5" : "mb-10"}>
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
                  <p className="text-red-500">Password is required</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#6D1610] font-extrabold text-lg w-[50%] text-white px-4 py-4 rounded-md"
              >
                Iniciar sesión
              </button>
            </form>
            <span className="text-center">
              <h3 className="mt-5">
                <span className="font-semibold mr-5">
                  ¿No tienes una cuenta?
                </span>
                <button
                  onClick={() => changeIsLogin(false)}
                  className="text-orange-300 font-bold"
                >
                  ¡Registrate!
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

export default LoginComponent;
