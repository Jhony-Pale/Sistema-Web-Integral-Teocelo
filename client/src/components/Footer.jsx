import MapaTeocelo from "../assets/Extras/MapaTeocelo.png";
import LogoVerticalBlanco from "../assets/Logos/LogoVerticalBlanco.png";
import EscudoVerticalP from "../assets/Logos/EscudoVerticalP.svg";
import IconoFacebook from "../assets/Icons/IconoFacebook.png";
import IconoTwitter from "../assets/Icons/IconoTwitter.png";
import IconoInstagram from "../assets/Icons/IconoInstagram.png";
import GoogleMap from "../components/GoogleMap"
import { BiCopyright, BiSolidPhone } from "react-icons/bi";
import { RiMapPin2Fill } from "react-icons/ri";

function Footer() {
  return (
    <div className="flex flex-col pt-10">
      <div className="bg-[#6D1610] grid grid-cols-3 place-items-center p-10 max-h-[400px]">
        <div className="flex flex-col items-center w-full">
          <span className="text-white text-3xl font-extrabold font-serif">
            UBICACIÓN:
          </span>
          <GoogleMap />
        </div>
        <div className="grid grid-rows-2 shrink-0 gap-8 px-2 lg:px-0 lg:ml-20">
          <div className="flex items-center justify-start gap-5">
            <BiSolidPhone size="2em" style={{ color: "#ffffff" }} />
            <span className="text-white font-serif font-bold text-sm lg:text-base">
              Palacio Municipal: (228)8210007 <br />
              DIF Municipal: (228)2016930 <br />
              Protección Civil: (228)8210872 <br />
              Policía Municipal: 8210328 <br />
            </span>
          </div>
          <div className="flex items-center justify-start gap-5">
            <RiMapPin2Fill size="2em" style={{ color: "#ffffff" }} />
            <span className="text-white font-serif font-bold">
              Juan Díaz Covarrubias S/N <br />
              Col. Centro <br />
              91615 <br />
              Teocelo, Veracruz, México <br />
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full items-center gap-5">
          <div className="flex items-center justify-around">
            <img
              src={LogoVerticalBlanco}
              alt="Logo vertical blanco"
              className="w-[40%] lg:max-w-[20%]"
            />
            <img
              src={EscudoVerticalP}
              alt="Logo vertical"
              className="w-[40%] lg:max-w-[20%]"
            />
          </div>
          <div className="text-white font-montserrat text-lg lg:text-3xl font-extrabold text-center">
            H. Ayuntamiento de Teocelo
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <img
              src={IconoFacebook}
              alt="Icono de Facebook"
              className="w-[80%] lg:max-w-[35%]"
            />
            <img
              src={IconoInstagram}
              alt="Icono de Instagram"
              className="w-[80%] lg:max-w-[35%]"
            />
            <img
              src={IconoTwitter}
              alt="Icono de Twitter"
              className="w-[80%] lg:max-w-[35%]"
            />
          </div>
        </div>
      </div>
      <div className="grow-0 bg-black flex items-center justify-center">
        <BiCopyright style={{ color: "#ffffff" }} />
        <span className="text-white font-bold text-sm font-serif">
          2022 - 2025 GOBIERNO DE TEOCELO. TODOS LOS DERECHOS RESERVADOS.
        </span>
      </div>
    </div>
  );
}

export default Footer;
