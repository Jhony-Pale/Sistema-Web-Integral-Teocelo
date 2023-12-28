import HeaderTittle from "../components/HeaderTittle";
import { useExtaData } from "../context/ExtraDataContext";

const titles = [
  "Secretaría del H. Ayuntamiento",
  "Archivo municipal",
  "Oficialía de partes",
  "Oficialía mayor",
  "Obras públicas",
  "Desarrollo económico",
  "Medio ambiente y desarrollo sostenible",
  "Agua potable y saneamiento",
  "Protección civil",
  "Educación, deporte, cultura y juventud",
  "Comunicación social",
  "Comandancia",
  "Planeación",
  "DIF",
  "SIPINNA",
  "Órgano de control interno",
  "Unidad de transparencia",
  "Tesorería",
  "Coordinación de programas sociales",
  "Unidad de asuntos jurídicos",
];

function PServicesPage() {
    const {isMobile} = useExtaData()
  return (
    <div className="bg-white pt-6 pb-8 mt-5">
      <HeaderTittle title={"Cédulas de trámites y servicios"} />
      <div className={`m-16 lg:mr-20 lg:ml-[13%] lg:my-16 flex flex-wrap gap-10 w-[90%]`}>
        {titles.map((title, i) => (
          <div className={`flex items-center gap-5 w-[45%] lg:w-[30%]`} key={i}>
            <div className="min-w-[40px] min-h-[40px] w-10 h-10 flex justify-center items-center bg-[#6D1610] rounded-full">
              <div className="bg-white w-5 h-5 rounded-full"></div>
            </div>
            <p className="font-montserrat font-medium text-xl">{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PServicesPage;
