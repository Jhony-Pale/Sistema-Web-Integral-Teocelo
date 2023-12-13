import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import Footer from "../components/Footer";
import "../styles/ThTable.css";
import InputSelect from "../components/InputSelect";

const options = ["Entregada", "En revisión", "Aceptada", "Rechazada"];

function SLRequestsPage() {
  const [inputValue, setInputValue] = useState("");
  const [colorInput, setColorInput] = useState("FFFFFF");
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchPerson();
    }
  };
  const handleSearchPerson = () => {
    console.log(inputValue);
  };

  const onOptionChange = (opc) => {
    if (opc === "Aceptada") return setColorInput("54CC60");
    if (opc === "Rechazada") return setColorInput("DB4545");
    setColorInput("FFFFFF");
  };

  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center text-center">
          <p>Solicitudes</p>
        </div>
        <div className="flex flex-row-reverse mt-5 mr-5">
          <div className="relative ml-14 w-[23rem]">
            <input
              type="text"
              placeholder="Buscar por nombre"
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              name="searchValue"
              className="w-full text-black pr-10 pl-2 py-2 rounded-lg border-[3px] border-[#6D1610] bg-white block placeholder-black font-montserrat"
            />
            <div className="absolute inset-y-0 right-0 px-[0.40rem] m-[0.5rem] flex items-center text-sm leading-5 bg-[#6D1610] rounded-md cursor-pointer">
              <LuSearch
                size="1.5em"
                style={{ color: "#ffffff" }}
                onClick={handleSearchPerson}
              />
            </div>
          </div>
        </div>
        <div className="m-10">
          <table className="table-fixed border-black border-[3px] border-separate border-spacing-2 w-full">
            <thead className="h-10 lg:h-16 font-extrabold text-xl lg:text-2xl">
              <tr>
                <th className="relative overflow-hidden">
                  <p className="p-3 break-words">Fecha</p>
                  <div className="border-[4px] border-[#6D1610] absolute inset-y-0 inset-x-0"></div>
                  <div className="absolute border-t-[5px] w-5 border-[#f9b03c] rotate-45 -right-2 top-0"></div>
                  <div className="absolute border-t-[5px] w-8 border-[#f9b03c] rotate-45 -right-[0.45rem] top-1"></div>
                  <div className="absolute border-t-[5px] w-12 border-[#f9b03c] rotate-45 -right-[0.60rem] top-[0.65rem]"></div>

                  <div className="absolute border-t-[5px] w-5 border-[#f9b03c] rotate-45 -left-2 bottom-0"></div>
                  <div className="absolute border-t-[5px] w-8 border-[#f9b03c] rotate-45 -left-[0.45rem] bottom-1"></div>
                  <div className="absolute border-t-[5px] w-12 border-[#f9b03c] rotate-45 -left-[0.60rem] bottom-[0.65rem]"></div>
                </th>
                <th className="relative overflow-hidden">
                  <p className="p-3 break-words">Nombre</p>
                  <div className="border-[4px] border-[#6D1610] absolute inset-y-0 inset-x-0"></div>
                  <div className="absolute border-t-[4px] w-5 border-[#f9b03c] -rotate-45 -left-2 top-0"></div>
                  <div className="absolute border-t-[4px] w-8 border-[#f9b03c] -rotate-45 -left-[0.45rem] top-1"></div>
                  <div className="absolute border-t-[4px] w-12 border-[#f9b03c] -rotate-45 -left-[0.60rem] top-[0.65rem]"></div>

                  <div className="absolute border-t-[4px] w-5 border-[#f9b03c] -rotate-45 -right-2 bottom-0"></div>
                  <div className="absolute border-t-[4px] w-8 border-[#f9b03c] -rotate-45 -right-[0.45rem] bottom-1"></div>
                  <div className="absolute border-t-[4px] w-12 border-[#f9b03c] -rotate-45 -right-[0.60rem] bottom-[0.65rem]"></div>
                </th>
                <th className="relative overflow-hidden">
                  <p className="p-3 break-words">Número telefónico</p>
                  <div className="border-[4px] border-[#6D1610] absolute inset-y-0 inset-x-0"></div>
                  <div className="absolute border-t-[5px] w-5 border-[#f9b03c] rotate-45 -right-2 top-0"></div>
                  <div className="absolute border-t-[5px] w-8 border-[#f9b03c] rotate-45 -right-[0.45rem] top-1"></div>
                  <div className="absolute border-t-[5px] w-12 border-[#f9b03c] rotate-45 -right-[0.60rem] top-[0.65rem]"></div>

                  <div className="absolute border-t-[5px] w-5 border-[#f9b03c] rotate-45 -left-2 bottom-0"></div>
                  <div className="absolute border-t-[5px] w-8 border-[#f9b03c] rotate-45 -left-[0.45rem] bottom-1"></div>
                  <div className="absolute border-t-[5px] w-12 border-[#f9b03c] rotate-45 -left-[0.60rem] bottom-[0.65rem]"></div>
                </th>
                <th className="relative overflow-hidden">
                  <p className="p-3 break-words">Ubicación de la lámpara</p>
                  <div className="border-[4px] border-[#6D1610] absolute inset-y-0 inset-x-0"></div>
                  <div className="absolute border-t-[4px] w-5 border-[#f9b03c] -rotate-45 -left-2 top-0"></div>
                  <div className="absolute border-t-[4px] w-8 border-[#f9b03c] -rotate-45 -left-[0.45rem] top-1"></div>
                  <div className="absolute border-t-[4px] w-12 border-[#f9b03c] -rotate-45 -left-[0.60rem] top-[0.65rem]"></div>

                  <div className="absolute border-t-[4px] w-5 border-[#f9b03c] -rotate-45 -right-2 bottom-0"></div>
                  <div className="absolute border-t-[4px] w-8 border-[#f9b03c] -rotate-45 -right-[0.45rem] bottom-1"></div>
                  <div className="absolute border-t-[4px] w-12 border-[#f9b03c] -rotate-45 -right-[0.60rem] bottom-[0.65rem]"></div>
                </th>
                <th className="relative overflow-hidden">
                  <p className="p-3 break-words">Comentarios adicionales</p>
                  <div className="border-[4px] border-[#6D1610] absolute inset-y-0 inset-x-0"></div>
                  <div className="absolute border-t-[5px] w-5 border-[#f9b03c] rotate-45 -right-2 top-0"></div>
                  <div className="absolute border-t-[5px] w-8 border-[#f9b03c] rotate-45 -right-[0.45rem] top-1"></div>
                  <div className="absolute border-t-[5px] w-12 border-[#f9b03c] rotate-45 -right-[0.60rem] top-[0.65rem]"></div>

                  <div className="absolute border-t-[5px] w-5 border-[#f9b03c] rotate-45 -left-2 bottom-0"></div>
                  <div className="absolute border-t-[5px] w-8 border-[#f9b03c] rotate-45 -left-[0.45rem] bottom-1"></div>
                  <div className="absolute border-t-[5px] w-12 border-[#f9b03c] rotate-45 -left-[0.60rem] bottom-[0.65rem]"></div>
                </th>
                <th className="relative overflow-hidden">
                  <p className="p-3 break-words">Estatus de la solicitud</p>
                  <div className="border-[4px] border-[#6D1610] absolute inset-y-0 inset-x-0"></div>
                  <div className="absolute border-t-[4px] w-5 border-[#f9b03c] -rotate-45 -left-2 top-0"></div>
                  <div className="absolute border-t-[4px] w-8 border-[#f9b03c] -rotate-45 -left-[0.45rem] top-1"></div>
                  <div className="absolute border-t-[4px] w-12 border-[#f9b03c] -rotate-45 -left-[0.60rem] top-[0.65rem]"></div>

                  <div className="absolute border-t-[4px] w-5 border-[#f9b03c] -rotate-45 -right-2 bottom-0"></div>
                  <div className="absolute border-t-[4px] w-8 border-[#f9b03c] -rotate-45 -right-[0.45rem] bottom-1"></div>
                  <div className="absolute border-t-[4px] w-12 border-[#f9b03c] -rotate-45 -right-[0.60rem] bottom-[0.65rem]"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-9 lg:h-12 font-bold text-base lg:text-lg">
                <th className="border-[2px] rounded-md border-black p-2">05/12/2023</th>
                <th className="border-[2px] rounded-md border-black p-2">Jhonatan Pale Colorado</th>
                <th className="border-[2px] rounded-md border-black p-2">2281824453</th>
                <th className="border-[2px] rounded-md border-black p-2 truncate">José María Pino Suárez, 16B, José María Pino Suárez, 16B, José María Pino Suárez, 16B</th>
                <th className="border-[2px] rounded-md border-black p-2 truncate">Es necesario su instalación por, Es necesario su instalación por, Es necesario su instalación por, Es necesario su instalación por</th>
                <th>
                  <InputSelect
                    options={options}
                    style={`rounded-md border-[2px] bg-[#${colorInput}] h-9 lg:h-12`}
                    onOptionChange={onOptionChange}
                  />
                </th>
              </tr>
              <tr className="h-9 lg:h-12 font-bold text-base lg:text-lg">
                <th className="border-[2px] rounded-md border-black p-2">05/12/2023</th>
                <th className="border-[2px] rounded-md border-black p-2">Jhonatan Pale Colorado</th>
                <th className="border-[2px] rounded-md border-black p-2">2281824453</th>
                <th className="border-[2px] rounded-md border-black p-2 truncate">José María Pino Suárez, 16B, José María Pino Suárez, 16B, José María Pino Suárez, 16B</th>
                <th className="border-[2px] rounded-md border-black p-2 truncate">Es necesario su instalación por, Es necesario su instalación por, Es necesario su instalación por, Es necesario su instalación por</th>
                <th>
                  <InputSelect
                    options={options}
                    style={`rounded-md border-[2px] bg-[#${colorInput}] h-9 lg:h-12`}
                    onOptionChange={onOptionChange}
                  />
                </th>
              </tr>
              <tr className="h-9 lg:h-12 font-bold text-base lg:text-lg">
                <th className="border-[2px] rounded-md border-black p-2">05/12/2023</th>
                <th className="border-[2px] rounded-md border-black p-2">Jhonatan Pale Colorado</th>
                <th className="border-[2px] rounded-md border-black p-2">2281824453</th>
                <th className="border-[2px] rounded-md border-black p-2 truncate">José María Pino Suárez, 16B, José María Pino Suárez, 16B, José María Pino Suárez, 16B</th>
                <th className="border-[2px] rounded-md border-black p-2 truncate">Es necesario su instalación por, Es necesario su instalación por, Es necesario su instalación por, Es necesario su instalación por</th>
                <th>
                  <InputSelect
                    options={options}
                    style={`rounded-md border-[2px] bg-[#${colorInput}] h-9 lg:h-12`}
                    onOptionChange={onOptionChange}
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SLRequestsPage;
