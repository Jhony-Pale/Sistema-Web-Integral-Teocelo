import IconoAgua from "../assets/Icons/IconoAgua.png"
import IconoAlumbrado from "../assets/Icons/IconoAlumbrado.png"
import IconoLimpia from "../assets/Icons/IconoLimpia.png"
import IconoConstancias from "../assets/Icons/IconoConstancias.png"
import IconoQuejas from "../assets/Icons/IconoQuejas.png"
import IconoTurismo from "../assets/Icons/IconoTurismo.png"

function ServicesOptions() {
  return (
    <div>
      <div>
        <h1 className="font-extrabold text-center text-4xl pt-5 pb-28">
          SERVICIOS
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5 text-center w-full">
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
            <img src={IconoAgua} alt="Icono de gotas de agua" className="py-5" />            
          </div>
          <div className="font-extrabold">Agua potable</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
          <img src={IconoAlumbrado} alt="Icono de gotas de agua" className="py-5" />
            
          </div>
          <div className="font-extrabold">Alumbrado Público</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
          <img src={IconoLimpia} alt="Icono de gotas de agua" className="py-5" />
          </div>
          <div className="font-extrabold">Limpia Pública</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
          <img src={IconoConstancias} alt="Icono de gotas de agua" className="py-5" />
          </div>
          <div className="font-extrabold">Constancias</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
          <img src={IconoQuejas} alt="Icono de gotas de agua" className="py-5" />
          </div>
          <div className="font-extrabold">Quejas y reportes</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
          <img src={IconoTurismo} alt="Icono de gotas de agua" className="py-5" />
          </div>
          <div className="font-extrabold">Guía Turística</div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOptions;
