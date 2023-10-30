import {
  Card,
  CardBody,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoHorizontal from "../assets/Logos/LogoHorizontal.png";
import EscudoVertical from "../assets/Logos/EscudoVertical.png";

function LoginRegisterMV() {
  const { register } = useForm();
  const [type, setType] = useState("login");

  return (
    <div>
      <Link to="/" className="absolute">
        <img
          src={LogoHorizontal}
          alt="Imagen horizontal"
          className="float-left mx-5 my-5 h-24"
        />
        <img
          src={EscudoVertical}
          alt="Imagen vertical"
          className="float-right mx-5 my-5 h-24"
        />
      </Link>
      <div className="flex items-center justify-center h-screen">
        <Card className="w-full max-w-[24rem]">
          <CardHeader
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center px-4 py-8 text-center bg-[#6D1610]"
          >
            <div className="mb-4 h-20 p-6 text-white">
              {type === "login" ? (
                <Typography variant="h3" color="white">
                  ¡Bienvenido!
                </Typography>
              ) : (
                <Typography variant="h3" color="white">
                  ¡Registrate!
                </Typography>
              )}
            </div>
          </CardHeader>
          <CardBody className="bg-[#EFEEEE]">
            <Tabs value={type} className="!overflow-y-hidden">
              <TabsHeader className="relative z-0 ">
                <Tab value="login" onClick={() => setType("login")}>
                  Iniciar sesión
                </Tab>
                <Tab value="register" onClick={() => setType("register")}>
                  Registrarse
                </Tab>
              </TabsHeader>
              <TabsBody
                className="!overflow-x-hidden !overflow-y-hidden"
                animate={{
                  initial: {
                    x: type === "login" ? 400 : -400,
                  },
                  mount: {
                    x: 0,
                  },
                  unmount: {
                    x: type === "login" ? 400 : -400,
                  },
                }}
              >
                <TabPanel value="login" className="p-0">
                  <form className="text-center">
                    <input
                      type="text"
                      placeholder="Correo electrónico"
                      {...register("emailLogin", { required: true })}
                      className="w-full text-black px-4 py-2 my-10 rounded-md border-2 border-black"
                    />
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Contraseña"
                        {...register("passwordLogin", { required: true })}
                        className="w-full text-black pl-4 pr-10 py-2 rounded-md border-2 border-black block"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <FaEye size="1.5em" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#6D1610] font-extrabold text-lg w-[50%] mt-10 text-white px-4 py-2 rounded-md"
                    >
                      Iniciar sesión
                    </button>
                  </form>
                </TabPanel>
                <TabPanel value="register" className="p-0 mt-10">
                  <form className="text-center">
                    <input
                      type="text"
                      placeholder="Nombre"
                      {...register("firstnameRegister", { required: true })}
                      className="w-full text-black px-4 py-2 mb-8 rounded-md border-2 border-black"
                    />
                    <input
                      type="text"
                      placeholder="Apellidos"
                      {...register("lastnameRegister", { required: true })}
                      className="w-full text-black px-4 py-2 mb-8 rounded-md border-2 border-black"
                    />
                    <input
                      type="text"
                      placeholder="Correo electrónico"
                      {...register("emailRegister", { required: true })}
                      className="w-full text-black px-4 py-2 mb-8 rounded-md border-2 border-black"
                    />
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Contraseña"
                        {...register("passwordRegister", { required: true })}
                        className="w-full text-black pl-4 pr-10 py-2 rounded-md border-2 border-black block"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <FaEye size="1.5em" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-[#6D1610] font-extrabold text-lg w-[50%] mt-10 text-white px-4 py-2 rounded-md"
                    >
                      Crear cuenta
                    </button>
                  </form>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default LoginRegisterMV;
