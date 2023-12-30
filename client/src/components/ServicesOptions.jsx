import IconoRecoBasura from "../assets/Icons/IconoRecoBasura.png";
import IconoTabClasif from "../assets/Icons/IconoTabClasif.png";
import IconoConstancias from "../assets/Icons/IconoConstancias.png";
import IconoActaNacimiento from "../assets/Icons/IconoActaNacimiento.png";
import { Link } from "react-router-dom";

function ServicesOptions() {
  return (
    <div>
      <div>
        <h1 className="font-extrabold text-center text-2xl lg:text-4xl pt-5 pb-28">
          SITIOS DE INTERES
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 gap-y-10 text-center w-full">
        <Link className="w-1/3 flex flex-col items-center" to="/garbage-collection-routes">
          <div className="relative">
            <div className="rounded-full bg-[#6D1610] h-[5em] w-[5em] lg:h-[8em] lg:w-[8em]"></div>
            <img
              src={IconoRecoBasura}
              alt="Icono de gotas de agua"
              className="absolute top-0 p-4"
            />
          </div>
          <div className="font-extrabold">Rutas de recolección de basura</div>
        </Link>
        <div className="w-1/3 flex flex-col items-center">
          <div className="relative">
            <div className="rounded-full bg-[#6D1610] h-[5em] w-[5em] lg:h-[8em] lg:w-[8em]"></div>
            <img
              src={IconoTabClasif}
              alt="Icono de gotas de agua"
              className="absolute top-[0.2rem] p-3"
            />
          </div>
          <div className="font-extrabold">Tablas de posiciones</div>
        </div>
        <a
          href="https://www.gob.mx/ActaNacimiento/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-1/3 flex flex-col items-center"
        >
          <div className="relative">
            <div className="rounded-full bg-[#6D1610] h-[5em] w-[5em] lg:h-[8em] lg:w-[8em]"></div>
            <img
              src={IconoActaNacimiento}
              alt="Icono de gotas de agua"
              className="absolute top-[15%] left-[0.15rem]"
            />
          </div>
          <div className="font-extrabold">Acta de nacimiento en línea</div>
        </a>
        <div className="w-1/3 flex flex-col items-center">
          <div className="relative">
            <div className="rounded-full bg-[#6D1610] h-[5em] w-[5em] lg:h-[8em] lg:w-[8em]"></div>
            <img
              src={IconoConstancias}
              alt="Icono de gotas de agua"
              className="absolute top-[15%]"
            />
          </div>
          <div className="font-extrabold">Constancias</div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOptions;
