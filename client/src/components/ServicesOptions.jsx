import IconoRecoBasura from "../assets/Icons/IconoRecoBasura.png";
import IconoTabClasif from "../assets/Icons/IconoTabClasif.png";
import IconoPregunta from "../assets/Icons/IconoPregunta.png";

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
          <div className="relative">
            <div className="rounded-full bg-[#6D1610] h-[5em] w-[5em] lg:h-[8em] lg:w-[8em]"></div>
            <img
              src={IconoRecoBasura}
              alt="Icono de gotas de agua"
              className="absolute inset-y-0 p-4"
            />
          </div>
          <div className="font-extrabold">Rutas de recolección de basura</div>
        </div>
        <div className="w-1/3 lg:w-1/4 flex flex-col items-center">
          <div className="relative">
            <div className="rounded-full bg-[#6D1610] h-[5em] w-[5em] lg:h-[8em] lg:w-[8em]"></div>
            <img
              src={IconoTabClasif}
              alt="Icono de gotas de agua"
              className="absolute inset-y-[0.2rem] p-3"
            />
          </div>
          <div className="font-extrabold">Tablas de posiciones</div>
        </div>
        <div className="w-1/3 lg:w-1/4 flex flex-col items-center">
          <div className="relative">
            <div className="rounded-full bg-[#6D1610] h-[5em] w-[5em] lg:h-[8em] lg:w-[8em]"></div>
            <img
              src={IconoPregunta}
              alt="Icono de gotas de agua"
              className="absolute -inset-y-3 lg:-inset-y-4 p-5 lg:p-8"
            />
          </div>
          <div className="font-extrabold">Preguntas frecuentes</div>
        </div>
        <div className="mt-16 w-full">
          <button className="bg-[#6d1610] text-white rounded-3xl font-playfair text-xl lg:text-2xl font-extrabold p-2 w-1/2">
            Preguntas frecuentes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicesOptions;
