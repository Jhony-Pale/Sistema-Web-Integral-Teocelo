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
  Alert,
  Collapse,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed, GoAlertFill } from "react-icons/go";
import { Link } from "react-router-dom";
import LogoHorizontal from "../assets/Logos/LogoHorizontal.png";
import EscudoVertical from "../assets/Logos/EscudoVertical.png";
import { useAuth } from "../context/AuthContext";
import { useExtaData } from "../context/ExtraDataContext";

function LoginRegisterMV() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: registerR,
    handleSubmit: handleSubmitR,
    formState: { errors: errorsR },
  } = useForm();
  const { signin, signup, errors: signInOutErrors, setErrors } = useAuth();
  const { isLogin } = useExtaData();
  const [type, setType] = useState(isLogin ? "login" : "register");
  const [showPasswordL, setShowPasswordL] = useState(false);
  const [showPasswordR, setShowPasswordR] = useState(false);
  const [collapseErrors, setCollapseErrors] = useState(false);

  const onSubmitLogin = handleSubmit((data) => {
    signin(data);
  });

  const onSubmitRegister = handleSubmitR(async (values) => {
    signup(values);
  });

  useEffect(() => {
    if (signInOutErrors.length > 0) setErrors([]);
  }, [type]);

  useEffect(() => {
    if (signInOutErrors.length > 0) {
      setCollapseErrors(true);

      const timer = setTimeout(() => {
        setCollapseErrors(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [signInOutErrors]);

  const showInputPasswordL = () => setShowPasswordL(!showPasswordL);
  const showInputPasswordR = () => setShowPasswordR(!showPasswordR);

  return (
    <div className="flex flex-col h-screen">
      <Link to="/" className="">
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
      <div className="shrink flex items-center justify-center h-full">
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
                <Collapse open={collapseErrors} className="my-5">
                  <div>
                    {signInOutErrors.map((error, i) => (
                      <Alert
                        icon={<GoAlertFill size="1.5em" color="red" />}
                        className="rounded-none border-l-4 border-[#c92e2e] bg-[#c92e2e]/10 font-medium text-[#c92e2e] mb-2"
                        key={i}
                      >
                        {error}
                      </Alert>
                    ))}
                  </div>
                </Collapse>
                <TabPanel value="login" className="p-0">
                  <form className="text-center" onSubmit={onSubmitLogin}>
                    <div className={`${errors.email ? "mb-5" : "mb-10"}`}>
                      <input
                        type="email"
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
                          type={showPasswordL ? "text" : "password"}
                          placeholder="Contraseña"
                          {...register("password", { required: true })}
                          className="w-full text-black pl-4 pr-10 py-2 rounded-md border-2 border-black block"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                          {showPasswordL ? (
                            <GoEyeClosed
                              size="1.5em"
                              onClick={showInputPasswordL}
                              className="cursor-pointer"
                            />
                          ) : (
                            <FaEye
                              size="1.5em"
                              onClick={showInputPasswordL}
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
                      className="bg-[#6D1610] font-extrabold text-lg w-[50%] text-white px-4 py-2 rounded-md"
                    >
                      Iniciar sesión
                    </button>
                  </form>
                </TabPanel>
                <TabPanel value="register" className="p-0">
                  <form className="text-center" onSubmit={onSubmitRegister}>
                    <div className={errorsR.firstname ? "mb-4" : "mb-8"}>
                      <input
                        type="text"
                        placeholder="Nombre"
                        {...registerR("firstname", { required: true })}
                        className="w-full text-black px-4 py-2 rounded-md border-2 border-black"
                      />
                      {errorsR.firstname && (
                        <p className="text-red-500">Firstname is required</p>
                      )}
                    </div>
                    <div className={errorsR.lastname ? "mb-4" : "mb-8"}>
                      <input
                        type="text"
                        placeholder="Apellidos"
                        {...registerR("lastname", { required: true })}
                        className="w-full text-black px-4 py-2 rounded-md border-2 border-black"
                      />
                      {errorsR.lastname && (
                        <p className="text-red-500">lastname is required</p>
                      )}
                    </div>
                    <div className={errorsR.email ? "mb-4" : "mb-8"}>
                      <input
                        type="text"
                        placeholder="Correo electrónico"
                        {...registerR("email", { required: true })}
                        className="w-full text-black px-4 py-2 rounded-md border-2 border-black"
                      />
                      {errorsR.email && (
                        <p className="text-red-500">email is required</p>
                      )}
                    </div>
                    <div className={errorsR.password ? "mb-5" : "mb-10"}>
                      <div className="relative">
                        <input
                          type={showPasswordR ? "text" : "password"}
                          placeholder="Contraseña"
                          {...registerR("password", { required: true })}
                          className="w-full text-black pl-4 pr-10 py-2 rounded-md border-2 border-black block"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                          {showPasswordR ? (
                            <GoEyeClosed
                              size="1.5em"
                              onClick={showInputPasswordR}
                              className="cursor-pointer"
                            />
                          ) : (
                            <FaEye
                              size="1.5em"
                              onClick={showInputPasswordR}
                              className="cursor-pointer"
                            />
                          )}
                        </div>
                      </div>
                      {errorsR.password && (
                        <p className="text-red-500">password is required</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="bg-[#6D1610] font-extrabold text-lg w-[50%] text-white px-4 py-2 rounded-md"
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
