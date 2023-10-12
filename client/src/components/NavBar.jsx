import { useForm } from "react-hook-form";
import LogoHorizontal from "../assets/LogoHorizontal.png";
import EscudoVertical from "../assets/EscudoVertical.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import NavBarOptions from "./NavBarOptions";


function NavBar() {
  const { register } = useForm();
  return (
    <div>
      <div className="flex bg-[#6D1610] font-montserrat text-xs text-white w-screen h-8 items-center justify-center">
        <p>GOBIERNO DE TEOCELO 2022 - 2025</p>
      </div>
      <div className="grid grid-cols-2 gap-0">
        <div className="flex">
          <img
            src={EscudoVertical}
            alt="Imagen vertical"
            className="ml-5 mr-16 my-5 h-20"
          />
          <img
            src={LogoHorizontal}
            alt="Imagen horizontal"
            className="my-5 h-20"
          />
        </div>
        <div className="flex items-center justify-end mr-5">
          <form method="get" className="mr-5">
            <div className="relative">
              <input
                type="password"
                placeholder="Buscar"
                {...register("search", { required: true })}
                className="w-full text-black pr-10 pl-10 py-2 rounded-3xl border border-black bg-[#efefef] block"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-sm leading-5">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  style={{ color: "#848488" }}
                />
              </div>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  size="xl"
                  style={{ color: "#848488" }}
                />
              </div>
            </div>
          </form>
          <button className="bg-[#6d1610] text-white rounded-3xl font-playfair text-lg py-2 px-10">
            Me gustaría...
          </button>
        </div>
      </div>


      <div className="w-full h-10 flex items-center justify-center bg-[#efeeee] shadow-lg">
        <NavBarOptions options={{
            "title" : "INICIO",
            "others" : {
                "INICIO" : "#"
            }
        }}/>
        <NavBarOptions options={{
            "title" : "TEOCELO",
            "others" : {
                "Opción 1" : "#",
                "Opción 2" : "#",
                "Opción 3" : "#"
            }
        }}/>
        <NavBarOptions options={{
            "title" : "GOBIERNO MUNICIPAL",
            "others" : {
                "Opción 1" : "#",
                "Opción 2" : "#",
                "Opción 3" : "#"
            }
        }}/>
        <NavBarOptions options={{
            "title" : "DIRECTORIO",
            "others" : {
                "Opción 1" : "#",
                "Opción 2" : "#",
                "Opción 3" : "#"
            }
        }}/>
        <NavBarOptions options={{
            "title" : "TRANSPARENCIAS",
            "others" : {
                "Opción 1" : "#",
                "Opción 2" : "#",
                "Opción 3" : "#"
            }
        }}/>
        <NavBarOptions options={{
            "title" : "TURISMO",
            "others" : {
                "Opción 1" : "#",
                "Opción 2" : "#",
                "Opción 3" : "#"
            }
        }}/>
        <NavBarOptions options={{
            "title" : "TRÁMITES Y SERVICIOS",
            "others" : {
                "INICIO" : "#"
            }
        }}/>
        
      </div>
    </div>
  );
}

export default NavBar;
