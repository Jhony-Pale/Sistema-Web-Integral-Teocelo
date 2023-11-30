import IconoAgua from "../assets/Icons/IconoAgua.png";
import IconoAlumbrado from "../assets/Icons/IconoAlumbrado.png";
import IconoLimpia from "../assets/Icons/IconoLimpia.png";
import IconoConstancias from "../assets/Icons/IconoConstancias.png";
import IconoQuejas from "../assets/Icons/IconoQuejas.png";
import IconoOficialia from "../assets/Icons/IconoOficialia.png";

function ServicesOptions() {
  return (
    <div>
      <div>
        <h1 className="font-extrabold text-center text-2xl lg:text-4xl pt-5 pb-28">
          SITIOS DE INTERES
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 text-center w-full">
        <div className="w-1/3 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[5em] max-w-[5em] lg:max-h-[8em] lg:max-w-[8em]">
            <img
              src={IconoAgua}
              alt="Icono de gotas de agua"
              className="py-5"
            />
          </div>
          <div className="font-extrabold">Agua potable</div>
        </div>
        <div className="w-1/3 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[5em] max-w-[5em] lg:max-h-[8em] lg:max-w-[8em]">
            <img
              src={IconoAlumbrado}
              alt="Icono de gotas de agua"
              className="py-5"
            />
          </div>
          <div className="font-extrabold">Alumbrado Público</div>
        </div>
        <div className="w-1/3 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[5em] max-w-[5em] lg:max-h-[8em] lg:max-w-[8em]">
            <img
              src={IconoLimpia}
              alt="Icono de gotas de agua"
              className="py-5"
            />
          </div>
          <div className="font-extrabold">Limpia Pública</div>
        </div>
        <div className="w-1/3 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[5em] max-w-[5em] lg:max-h-[8em] lg:max-w-[8em]">
            <img
              src={IconoConstancias}
              alt="Icono de gotas de agua"
              className="py-5"
            />
          </div>
          <div className="font-extrabold">Constancias</div>
        </div>
        <div className="w-1/3 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[5em] max-w-[5em] lg:max-h-[8em] lg:max-w-[8em]">
            <img
              src={IconoQuejas}
              alt="Icono de gotas de agua"
              className="py-5"
            />
          </div>
          <div className="font-extrabold">Quejas y reportes</div>
        </div>
        <div className="w-1/3 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[5em] max-w-[5em] lg:max-h-[8em] lg:max-w-[8em]">
            <img
              src={IconoOficialia}
              alt="Icono de gotas de agua"
              className="py-5"
            />
          </div>
          <div className="font-extrabold">Oficialia de Partes</div>
        </div>
        <div className="mt-16 w-full">
          <button className="bg-[#6d1610] text-white rounded-3xl font-playfair text-xl lg:text-2xl font-extrabold p-2 w-1/2">Preguntas frecuentes</button>
        </div>
      </div>
    </div>
  );
}

export default ServicesOptions;
