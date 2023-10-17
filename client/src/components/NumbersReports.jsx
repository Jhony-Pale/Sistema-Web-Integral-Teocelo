import Logo075 from "../assets/Logos/Logo075.png"
import Logo911 from "../assets/Logos/Logo911.png"
import LogoAlerta from "../assets/Logos/LogoAlerta.png"
import LogoDenuncia from "../assets/Logos/LogoDenuncia.png"
import ReportHomeForm from "./ReportHomeForm";

function NumbersReports() {
  return (
    <div className="grid grid-cols-2 px-4">
      <div>
        <div className="font-extrabold text-center text-4xl pt-5 pb-20">
          NUMEROS DE EMERGENCIA
        </div>
        <div className="grid grid-cols-2 grid-rows-2 items-center justify-items-center">
            <img src={LogoDenuncia} alt="Imagen sobre Denuncia Anónima" className="w-[80%]" />
            <img src={Logo911} alt="Imagen sobre 911" className="w-[80%]" />
            <img src={Logo075} alt="Imagen sobre Línea de la Mujer" className="w-[80%] mt-8" />
            <img src={LogoAlerta} alt="Imagen sobre Alerta de violencia de género" className="w-[80%] mt-8" />
        </div>
      </div>
      <ReportHomeForm />
    </div>
  );
}

export default NumbersReports;
