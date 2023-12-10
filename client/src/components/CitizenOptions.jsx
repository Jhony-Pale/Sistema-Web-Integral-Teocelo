import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useExtaData } from "../context/ExtraDataContext";
import IconoConstancias from "../assets/Icons/IconoConstancias.png";
import IconoQuejas from "../assets/Icons/IconoQuejas.png";
import "./IconUserLogin.css";

function CitizenOptions({ handleLogout, userName }) {
  const { isMobile } = useExtaData();
  const handleLogoutClick = () => {
    handleLogout();
  };
  return (
    <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"} mb-10`}>
      <div
        className={`${
          isMobile ? "grid grid-cols-2" : "flex-col basis-1/3"
        } text-black`}
      >
        <div className="flex items-center gap-3 col-span-2 mb-3 lg:mb-5">
          <div className="relative">
            <div className="rounded-full bg-[#6D1610] lg:min-h-[5em] lg:min-w-[5em] min-h-[4em] min-w-[4em]"></div>
            <img
              src={IconoConstancias}
              alt="Icono de gotas de agua"
              className="absolute top-[18%]"
            />
          </div>
          <p className="font-extrabold text-xl lg:text-2xl">Solicitar</p>
        </div>
        <Link className="flex items-center gap-2 mb-5">
          <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
          <p className="font-bold text-lg lg:text-xl">Conexión de agua o drenaje</p>
        </Link>
        <Link className="flex items-center gap-2 mb-5">
          <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
          <p className="font-bold text-lg lg:text-xl">Instalación de una lámpara</p>
        </Link>
        <Link className="flex items-center gap-2 mb-5">
          <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
          <p className="font-bold text-lg lg:text-xl">Constancia ganadera</p>
        </Link>
        <Link className="flex items-center gap-2 mb-5">
          <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
          <p className="font-bold text-lg lg:text-xl">Constancia agrícola</p>
        </Link>
        <Link className="flex items-center gap-2 mb-5">
          <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
          <p className="font-bold text-lg lg:text-xl">Guía de traslado de bambú</p>
        </Link>
      </div>
      <div
        className={`${
          isMobile ? "grid grid-cols-2" : "flex-col basis-1/3"
        } text-black`}
      >
        <div className="col-span-2 flex items-center gap-3 mb-3 lg:mb-5">
          <div className="relative">
            <div className="rounded-full bg-[#6D1610] lg:min-h-[5em] lg:min-w-[5em] min-h-[4em] min-w-[4em]"></div>
            <img
              src={IconoQuejas}
              alt="Icono de gotas de agua"
              className="absolute top-[18%]"
            />
          </div>
          <p className="font-extrabold text-xl lg:text-2xl">Reportar</p>
        </div>
        <Link className="flex items-center gap-2 mb-5">
          <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
          <p className="font-bold text-lg lg:text-xl">
            Tubería de agua o drenaje dañada
          </p>
        </Link>
        <Link className="flex items-center gap-2 mb-5">
          <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
          <p className="font-bold text-lg lg:text-xl">Luminaria descompuesta</p>
        </Link>
        <Link className="flex items-center gap-2 mb-5">
          <div className="min-h-[1.5em] min-w-[1.5em] rounded-full bg-[#F9B03C]"></div>
          <p className="font-bold text-lg lg:text-xl">Servidor público</p>
        </Link>
      </div>
      <div className={`flex flex-col items-center gap-5`}>
        <div className="flex flex-col items-center">
          <div className="relative w-[100px] h-[100px] lg:w-[140px] lg:h-[140px]">
            <div className="user-icon"></div>
            <div className="user-icon-mark">
              <FaCheck size={isMobile ? "1.5em" : "2em"} color="white" />
            </div>
          </div>
          <p className="font-extrabold text-black text-xl">{userName}</p>
        </div>
        <Link
          to="/"
          onClick={handleLogoutClick}
          className={`bg-white border-[#6d1610] border-2 p-1 rounded-full ${
            isMobile ? "w-1/2" : "w-2/3"
          }`}
        >
          <button className="bg-[#6d1610] text-white rounded-full font-montserrat text-2xl lg:text-3xl py-1 px-5 w-full">
            Cerrar sesión
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CitizenOptions;