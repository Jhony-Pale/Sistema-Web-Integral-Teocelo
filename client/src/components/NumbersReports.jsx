import Logo075 from "../assets/Logos/Logo075.png";
import Logo911 from "../assets/Logos/Logo911.png";
import LogoAlerta from "../assets/Logos/LogoAlerta.png";
import LogoDenuncia from "../assets/Logos/LogoDenuncia.png";
import ReportHomeForm from "./ReportHomeForm";

function NumbersReports() {
  return (
    <div className="grid grid-cols-2 px-4 mt-16">
      <div>
        <div className="font-extrabold text-center text-4xl pt-5 pb-20">
          NUMEROS DE EMERGENCIA
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-8 items-center justify-items-center">
          <a
            href="http://www.veracruz.gob.mx/programadegobierno/quejas-y-denuncias/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[80%]"
          >
            <img
              src={LogoDenuncia}
              alt="Imagen sobre Denuncia Anónima"
              className="w-full"
            />
          </a>
          <a
            href="https://www.gob.mx/911"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[80%]"
          >
            <img src={Logo911} alt="Imagen sobre 911" className="w-full" />
          </a>
          <a
            href="http://www.ivermujeres.gob.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[80%]"
          >
            <img
              src={Logo075}
              alt="Imagen sobre Línea de la Mujer"
              className="w-full"
            />
          </a>
          <a
            href="http://www.veracruz.gob.mx/avgm/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[80%]"
          >
            <img
              src={LogoAlerta}
              alt="Imagen sobre Alerta de violencia de género"
              className="w-full"
            />
          </a>
        </div>
      </div>
      <ReportHomeForm />
    </div>
  );
}

export default NumbersReports;
