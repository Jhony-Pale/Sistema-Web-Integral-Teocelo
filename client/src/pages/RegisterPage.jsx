import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import LogoHorizontal from "../assets/LogoHorizontal.png";
import EscudoVertical from "../assets/EscudoVertical.png";
import Collage from "../assets/Collage.png";

function RegisterPage() {
  const { register } = useForm();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("divPassword").classList.add("relative");
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 gap-0 absolute">
        <div className="h-screen">
          <img
            src={Collage}
            alt="Imagen login"
            className="h-screen w-screen animate-rightleft"
          />
        </div>
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
          <div className="flex h-[calc(100vh-190px)] items-center justify-center">
            <div>
              <h1 className="font-playfair text-red-800 text-6xl mb-20 text-center">
                ¡Registrate!
              </h1>
              <form className="text-center">
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("firstname", { required: true })}
                  className="w-full text-black px-4 py-2 mb-8 rounded-md border-2 border-black"
                />
                <input
                  type="text"
                  placeholder="Apellidos"
                  {...register("lastname", { required: true })}
                  className="w-full text-black px-4 py-2 mb-8 rounded-md border-2 border-black"
                />
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  {...register("email", { required: true })}
                  className="w-full text-black px-4 py-2 mb-8 rounded-md border-2 border-black"
                />
                <div className="" id="divPassword">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", { required: true })}
                    className="w-full text-black pl-4 pr-10 py-2 rounded-md border-2 border-black block"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <FontAwesomeIcon icon={faEye} size="xl" />
                  </div>
                </div>

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
                  <Link to="/login" className="text-orange-300 font-bold">
                    ¡Inicia sesión!
                  </Link>
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

      <div className="grid grid-cols-2 gap-0 pointer-events-none">
        <div className="grid grid-cols-1 gap-0 h-screen">
          <div className="col-span-1">
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
          </div>
          <div className="flex h-[calc(100vh-190px)] items-center justify-center">
            <div>
              <h1 className="font-playfair text-red-800 text-6xl mb-20 text-center">
                ¡Bienvenido!
              </h1>
              <form className="text-center">
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  className="w-full text-black px-4 py-2 my-10 rounded-md border-2 border-black"
                />
                <div className="statics">
                  <input
                    type="text"
                    placeholder="Contraseña"
                    className="w-full text-black pl-4 pr-10 py-2 rounded-md border-2 border-black "
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#6D1610] font-extrabold text-lg w-[50%] mt-10 text-white px-4 py-4 rounded-md"
                >
                  Iniciar sesión
                </button>
              </form>
              <span className="text-center">
                <h3 className="mt-5">
                  <span className="font-semibold mr-5">
                    ¿No tienes una cuenta?
                  </span>
                  <Link to="/register" className="text-orange-300 font-bold">
                    ¡Registrate!
                  </Link>
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
    </div>
  );
}

export default RegisterPage;
