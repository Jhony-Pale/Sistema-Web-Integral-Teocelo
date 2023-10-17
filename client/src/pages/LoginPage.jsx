import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import LogoHorizontal from "../assets/Logos/LogoHorizontal.png";
import EscudoVertical from "../assets/Logos/EscudoVertical.png";
import Collage from "../assets/Photos/Collage.png";

function LoginPage() {
  const { register } = useForm();
  return (
    <div>
      <div className="grid grid-cols-2 gap-0 absolute">
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
              <h1 className="font-playfair text-red-800 text-6xl mb-20 text-center">
                ¡Bienvenido!
              </h1>
              <form className="text-center">
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  {...register("email", { required: true })}
                  className="w-full text-black px-4 py-2 my-10 rounded-md border-2 border-black"
                />
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    {...register("password", { required: true })}
                    className="w-full text-black pl-4 pr-10 py-2 rounded-md border-2 border-black block"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <FaEye size="1.5em" />
                  </div>
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
        <div className="h-screen">
          <img
            src={Collage}
            alt="Imagen login"
            className="h-screen w-screen animate-leftright"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0 pointer-events-none">
        <div></div>
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
                ¡Registrate!
              </h1>
              <form className="text-center">
                <input
                  type="text"
                  placeholder="Nombre"
                  {...register("firstname")}
                  className="w-full text-black px-4 py-2 mb-8 rounded-md border-2 border-black"
                />
                <input
                  type="text"
                  placeholder="Apellidos"
                  {...register("lastname")}
                  className="w-full text-black px-4 py-2 mb-8 rounded-md border-2 border-black"
                />
                <input
                  type="text"
                  placeholder="Correo electrónico"
                  className="w-full text-black px-4 py-2 mb-8 rounded-md border-2 border-black"
                />
                <div>
                  <input
                    type="text"
                    placeholder="Contraseña"
                    className="w-full text-black pl-4 pr-10 py-2 rounded-md border-2 border-black block"
                  />
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
    </div>
  );
}

export default LoginPage;
