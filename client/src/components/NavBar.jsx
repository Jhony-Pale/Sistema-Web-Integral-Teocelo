import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Drawer,
  List,
  ThemeProvider,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCircleXmark, FaXmark } from "react-icons/fa6";
import { BiMenu } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { useExtaData } from "../context/ExtraDataContext";
import LogoHorizontal from "../assets/Logos/LogoHorizontal.png";
import EscudoVertical from "../assets/Logos/EscudoVertical.png";
import IconoX from "../assets/Icons/IconoX.png";
import BtnMeGustaria from "../assets/Extras/BtnMeGustaria.png";
import NavBarOptions from "./NavBarOptions";
import NavBarOptionsMobileVersion from "./NavBarOptionsMobileVersion";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import SCOptions from "./SCOptions";
import CitizenOptions from "./CitizenOptions";
import DefaultOptions from "./DefaultOptions";
import SLOptions from "./SLOptions";
import Footer from "./Footer";
import DWOptions from "./DWOptions";

function NavBar() {
  const { register } = useForm();
  const { isMobile } = useExtaData();
  const { isAuthenticated, user, logout } = useAuth();

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => setOpenDrawer(true);
  const closeDrawer = () => setOpenDrawer(false);

  const handleLogout = () => {
    logout();
    handleOpenDialog();
  };

  const themeDrawer = {
    drawer: {
      defaultProps: {
        size: 300,
        overlay: true,
        placement: "left",
        overlayProps: undefined,
        className: "",
        dismiss: undefined,
        onClose: undefined,
        transition: {
          type: "tween",
          duration: 0.3,
        },
      },
      styles: {
        base: {
          drawer: {
            position: "fixed",
            zIndex: "z-[9999]",
            pointerEvents: "pointer-events-auto",
            backgroundColor: "bg-white",
            boxSizing: "box-border",
            width: "w-full",
            boxShadow: "shadow-2xl shadow-blue-gray-900/10",
          },
          overlay: {
            position: "fixed",
            inset: "inset-0",
            width: "w-full",
            height: "h-screen",
            pointerEvents: "pointer-events-auto",
            zIndex: "z-[9995]",
            backgroundColor: "bg-black",
            backgroundOpacity: "bg-opacity-60",
            backdropBlur: "backdrop-blur-sm",
          },
        },
      },
    },
  };

  return (
    <div>
      <ThemeProvider value={themeDrawer}>
        <div className="flex bg-[#6D1610] font-montserrat text-xs text-white w-full h-8 items-center justify-center">
          <p>GOBIERNO DE TEOCELO 2022 - 2025</p>
        </div>
        <div
          className={`grid gap-0 ${
            isMobile ? "grid-cols-1 justify-items-center" : "grid-cols-2"
          }`}
        >
          <div className="flex">
            <img
              src={EscudoVertical}
              alt="Imagen vertical"
              className="ml-5 mr-16 my-5 h-20"
            />
            <img
              src={LogoHorizontal}
              alt="Imagen horizontal"
              className="my-5 h-20"
            />
          </div>
          {!isMobile && (
            <div className="flex items-center justify-end">
              <form method="get" className="mr-5">
                <div className="relative ml-14">
                  <input
                    type="text"
                    placeholder="Buscar"
                    {...register("search", { required: true })}
                    className="w-full text-black pr-10 pl-10 py-2 rounded-3xl border border-black bg-[#efefef] block"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm leading-5">
                    <FaSearch size="1.5em" style={{ color: "#848488" }} />
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <FaCircleXmark size="1.5em" style={{ color: "#848488" }} />
                  </div>
                </div>
              </form>

              <motion.img
                whileTap={{ scale: 0.95 }}
                src={BtnMeGustaria}
                onClick={handleOpenDialog}
                className="w-1/2 md:w-[38%] lg:w-1/5 mr-5 mt-3 cursor-pointer"
              />
            </div>
          )}
        </div>

        <div className="sticky top-0 z-[9999]">
          {isMobile ? (
            <>
              <div className="w-full h-10 flex items-center justify-center bg-[#efeeee] shadow-lg">
                <BiMenu
                  onClick={showDrawer}
                  className="cursor-pointer"
                  size="2em"
                />
              </div>
              <Drawer open={openDrawer} onClose={closeDrawer} className="p-4">
                <div className="mb-6 flex items-center justify-between">
                  <span>Menu</span>
                  <FaXmark className="cursor-pointer" onClick={closeDrawer} />
                </div>
                <div className="grid grid-cols-1 items-center justify-center">
                  <form method="get">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Buscar"
                        {...register("search", { required: true })}
                        className="w-full text-black pr-10 pl-10 py-2 rounded-3xl border border-black bg-[#efefef] block"
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm leading-5">
                        <FaSearch size="1.5em" style={{ color: "#848488" }} />
                      </div>
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                        <FaCircleXmark
                          size="1.5em"
                          style={{ color: "#848488" }}
                        />
                      </div>
                    </div>
                  </form>
                  <motion.img
                    whileTap={{ scale: 0.95 }}
                    src={BtnMeGustaria}
                    onClick={handleOpenDialog}
                    className="w-[70%] mr-5 mt-3 justify-self-center"
                  />
                </div>
                <div className="mb-8 pr-4 mt-10">
                  <List>
                    <NavBarOptionsMobileVersion
                      options={{
                        title: "INICIO",
                        others: {
                          INICIO: "/",
                        },
                      }}
                    />
                    <NavBarOptionsMobileVersion
                      options={{
                        title: "TEOCELO",
                        others: {
                          Historia: "/history",
                          "Escudo de armas": "/coat-of-arms",
                          "Acontecimientos históricos": "/historical-events",
                        },
                      }}
                    />
                    <NavBarOptionsMobileVersion
                      options={{
                        title: "GOBIERNO MUNICIPAL",
                        others: {
                          "Misión y visión": "/mission-and-vision",
                          Organigrama:
                            "https://drive.google.com/file/d/1ug0zaMZGgvX3e79qur7hQSvDF17qJ-jr/view?usp=sharing",
                          "H. Cabildo": "/h-cabildo",
                          "Códigos de ética": "/codes-ethics",
                          "Códigos de conducta": "/codes-conduct",
                        },
                      }}
                    />
                    <NavBarOptionsMobileVersion
                      options={{
                        title: "DIRECTORIO",
                        others: {
                          DIRECTORIO: "/municipal-directory",
                        },
                      }}
                    />
                    <NavBarOptionsMobileVersion
                      options={{
                        title: "TRANSPARENCIA",
                        others: {
                          "Acta circunstanciada de entrega y recepción":
                            "/circumstantial-act",
                          "Convenio DECLARANET": "/declaranet-convention",
                          "Avisos de privacidad": "/privacy-notices",
                          "Plan Municipal de Desarrollo 2022 - 2025":
                            "/pmd-teocelo",
                          "Programa Anual de Evaluación 2023": "/pae-teocelo",
                          "Evaluación de desempeño FISM": "/fism-evaluation",
                          "Evaluación de desempeño FORTAMUN":
                            "/fortamun-evaluation",
                        },
                      }}
                    />
                    <NavBarOptionsMobileVersion
                      options={{
                        title: "TURISMO",
                        others: {
                          "Opción 1": "#",
                          "Opción 2": "#",
                          "Opción 3": "#",
                        },
                      }}
                    />
                    <NavBarOptionsMobileVersion
                      options={{
                        title: "TRÁMITES Y SERVICIOS",
                        others: {
                          INICIO: "#",
                        },
                      }}
                    />
                  </List>
                </div>
              </Drawer>
            </>
          ) : (
            <>
              <div className="w-full h-10 flex items-center justify-center bg-[#efeeee] shadow-lg">
                <NavBarOptions
                  options={{
                    title: "INICIO",
                    others: {
                      INICIO: "/",
                    },
                  }}
                />
                <NavBarOptions
                  options={{
                    title: "TEOCELO",
                    others: {
                      Historia: "/history",
                      "Escudo de armas": "/coat-of-arms",
                      "Acontecimientos históricos": "/historical-events",
                    },
                  }}
                />
                <NavBarOptions
                  options={{
                    title: "GOBIERNO MUNICIPAL",
                    others: {
                      "Misión y visión": "/mission-and-vision",
                      Organigrama:
                        "https://drive.google.com/file/d/1ug0zaMZGgvX3e79qur7hQSvDF17qJ-jr/view?usp=sharing",
                      "H. Cabildo": "/h-cabildo",
                      "Códigos de ética": "/codes-ethics",
                      "Códigos de conducta": "/codes-conduct",
                    },
                  }}
                />
                <NavBarOptions
                  options={{
                    title: "DIRECTORIO",
                    others: {
                      DIRECTORIO: "/municipal-directory",
                    },
                  }}
                />
                <NavBarOptions
                  options={{
                    title: "TRANSPARENCIA",
                    others: {
                      "Acta circunstanciada de entrega y recepción":
                        "/circumstantial-act",
                      "Convenio DECLARANET": "/declaranet-convention",
                      "Avisos de privacidad": "/privacy-notices",
                      "Plan Municipal de Desarrollo 2022 - 2025":
                        "/pmd-teocelo",
                      "Programa Anual de Evaluación 2023": "/pae-teocelo",
                      "Evaluación de desempeño FISM": "/fism-evaluation",
                      "Evaluación de desempeño FORTAMUN":
                        "/fortamun-evaluation",
                    },
                  }}
                />
                <NavBarOptions
                  options={{
                    title: "TURISMO",
                    others: {
                      "Opción 1": "#",
                      "Opción 2": "#",
                      "Opción 3": "#",
                    },
                  }}
                />
                <NavBarOptions
                  options={{
                    title: "TRÁMITES Y SERVICIOS",
                    others: {
                      INICIO: "#",
                    },
                  }}
                />
              </div>
            </>
          )}
        </div>

        <>
          <Dialog
            open={openDialog}
            handler={handleOpenDialog}
            size="lg"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>
              <div className="grid grid-cols-2 rounded-lg bg-[#6D1610] w-full h-12 lg:h-16 items-center text-white">
                <div className="justify-self-start ml-5 font-montserrat text-2xl lg:text-3xl">
                  Me gustaría...
                </div>
                <button
                  className="justify-self-end mr-5 mt-2"
                  onClick={handleOpenDialog}
                >
                  <img
                    src={IconoX}
                    alt="Icono de la marca X"
                    className="w-[70%] lg:w-[80%]"
                  />
                </button>
              </div>
            </DialogHeader>
            <DialogBody>
              {isAuthenticated ? (
                <>
                  {user.rol === "employee.sc" && (
                    <>
                      <SCOptions
                        handleLogout={handleLogout}
                        userName={user.firstname + " " + user.lastname}
                      />
                    </>
                  )}
                  {user.rol === "employee.sl" && (
                    <>
                      <SLOptions
                        handleLogout={handleLogout}
                        userName={user.firstname + " " + user.lastname}
                      />
                    </>
                  )}
                  {user.rol === "employee.dw" && (
                    <>
                      <DWOptions
                        handleLogout={handleLogout}
                        userName={user.firstname + " " + user.lastname}
                      />
                    </>
                  )}
                  {user.rol === "citizen" && (
                    <>
                      <CitizenOptions
                        handleLogout={handleLogout}
                        userName={user.firstname + " " + user.lastname}
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  <DefaultOptions />
                </>
              )}
            </DialogBody>
            <DialogFooter>
              <img
                src={LogoHorizontal}
                alt="Logo horizontal"
                className="w-1/3 lg:w-1/5 mb-16 absolute z-[50] -bottom-14 right-4"
              />
            </DialogFooter>
          </Dialog>
        </>
      </ThemeProvider>

      <div className="overflow-hidden">
        <motion.div
          initial={{ x: -window.innerWidth }}
          animate={{ x: 0 }}
          exit={{ x: window.innerWidth }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}

export default NavBar;
