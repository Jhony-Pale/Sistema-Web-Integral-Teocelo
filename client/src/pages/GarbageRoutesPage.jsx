import ArrowRoutes from "../components/ArrowRoutes";
import HeaderTittle from "../components/HeaderTittle";

const monday = [
  "5 de Mayo",
  "Miguel Hidalgo",
  "Prolongación Hidalgo",
  "Rubén Darío",
  "Camino a Santa Rosa",
  "Mercado Municipal",
  "Teocelo 2000",
  "Santa Rosa",
  "Parque “Revolución”",
  "Independencia Poniente",
  "Campo “Magueyal”",
  "Carretera a Xalapa",
  "Talleres",
];

const tuesday = [
  "Independencia Oriente",
  "Independencia Poniente",
  "Baxtla",
  "20 de Noviembre",
  "Oaxaca",
  "Texin",
  "Belisario Domínguez",
  "Col. La Loma",
  "Barrio de la Palma",
  "Emiliano Zapata",
  "Col. Las Higueras",
  "El Zapote",
  "Mariano Abasolo",
  "Col. Cañada de Apilot",
  "Paso del Obispo",
  "Mariano Matamoros",
  "Ignacio Allende",
];

const wednesday = [
  "Independencia Oriente",
  "Col. Tlampapa",
  "Súchil",
  "Col. La Rocco",
  "Mariano Arista",
  "Col. Benito Juárez",
  "Los Teteles",
  "Guadalupe Victoria",
  "Col. Los Cedros",
  "Miguel Negrete",
];

const thursday = [
  "Priv. Zapaitonal",
  "Coapexpan",
  "Los Carriles",
  "Zapaitonal",
  "Col. Las Margaritas",
  "Col. Raúl Martínez",
  "Cohetería",
  "Río Bobos",
  "Camino a Baxtla",
  "Francisco I. Madero",
  "San Pedro",
  "Vicente Guerrero",
];

const friday = [
  "Llano Grande",
  "Independencia",
  "Motel de Teocelo",
  "Monte Blanco",
  "Loma Alta",
  "Salón “La Querencia”",
  "Tejerías",
  "La gasera",
  "Rancho “Los Carvajal”",
];

function GarbageRoutesPage() {
  return (
    <div className="bg-white pt-6 pb-8 mt-5">
      <HeaderTittle title={"Rutas de recolección de basura"} />
      <div className="mx-[10%] my-16 flex flex-col gap-14">
        {["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"].map((day, i) => (
          <div className="flex gap-5 justify-center items-center">
            <ArrowRoutes day={day} />
            <div className="bg-[#EFEFEF] drop-shadow-md shadow shadow-gray-400 flex flex-wrap gap-5 p-5 text-base lg:text-xl font-bold font-sans">
              {(day === "Lunes"
                ? monday
                : day === "Martes"
                ? tuesday
                : day === "Miercoles"
                ? wednesday
                : day === "Jueves"
                ? thursday
                : friday
              ).map((value, i) => (
                <div
                  className="flex items-center gap-3 sm:w-full md:w-[45%] lg:max-w-[30%]"
                  key={i}
                >
                  <div className="w-5 h-5 min-w-[20px] bg-[#F9B03C] rounded-full"></div>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GarbageRoutesPage;
