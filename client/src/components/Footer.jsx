import MapaTeocelo from "../assets/MapaTeocelo.png";
import LogoVerticalBlanco from "../assets/LogoVerticalBlanco.png";
import EscudoVerticalP from "../assets/EscudoVerticalP.png";
import IconoFacebook from "../assets/IconoFacebook.png";
import IconoTwitter from "../assets/IconoTwitter.png";
import IconoInstagram from "../assets/IconoInstagram.png";
import { BiCopyright, BiSolidPhone } from "react-icons/bi";
import { RiMapPin2Fill } from "react-icons/ri";

function Footer() {
  return (
    <div className="flex flex-col pt-10">
      <div className="bg-[#6D1610] flex items-center p-10 justify-around">
        <div className="flex flex-col items-center shrink-0">
          <span className="text-white text-3xl font-extrabold font-serif">
            UBICACIÓN:
          </span>
          <img
            src={MapaTeocelo}
            alt="Mapa de la ubicación de Teocelo"
            className="w-[60%]"
          />
        </div>
        <div className="grid grid-rows-2 shrink-0 gap-8">
          <div className="flex items-center justify-start gap-5">
            <BiSolidPhone size="2em" style={{ color: "#ffffff" }} />
            <span className="text-white font-serif font-bold">
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
            <img src={LogoVerticalBlanco} alt="Logo vertical blanco" className="w-[30%]" />
            <img src={EscudoVerticalP} alt="Logo vertical" className="w-[30%]" />
          </div>
          <div className="text-white font-montserrat text-3xl font-extrabold text-center">
            H. Ayuntamiento de Teocelo
          </div>
          <div className="grid grid-cols-3 place-items-center">
            <img src={IconoFacebook} alt="Icono de Facebook" className="w-[40%]" />
            <img src={IconoInstagram} alt="Icono de Instagram" className="w-[40%]" />
            <img src={IconoTwitter} alt="Icono de Twitter" className="w-[40%]" />
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
