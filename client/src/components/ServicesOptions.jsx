import { TbDroplets } from "react-icons/tb";
import { GiStreetLight, GiMagicBroom } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

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
            <TbDroplets
              size="8em"
              style={{ color: "#ffffff" }}
              className="pb-2 px-2"
            />
          </div>
          <div className="font-extrabold">Agua potable</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
            <GiStreetLight
              size="8em"
              style={{ color: "#ffffff" }}
              className="py-2 pl-4"
            />
          </div>
          <div className="font-extrabold">Alumbrado Público</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
            <GiMagicBroom
              size="8em"
              style={{ color: "#ffffff" }}
              className="py-4 pr-1"
            />
          </div>
          <div className="font-extrabold">Limpia Pública</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
            <IoDocumentTextOutline
              size="8em"
              style={{ color: "#ffffff" }}
              className="p-3"
            />
          </div>
          <div className="font-extrabold">Constancias</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
            <BiPhoneCall
              size="8em"
              style={{ color: "#ffffff" }}
              className="p-3"
            />
          </div>
          <div className="font-extrabold">Quejas y reportes</div>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 flex flex-col items-center">
          <div className="rounded-full bg-[#6D1610] max-h-[8em] max-w-[8em]">
            <FaPersonWalkingLuggage
              size="8em"
              style={{ color: "#ffffff" }}
              className="p-3"
            />
          </div>
          <div className="font-extrabold">Guía Turística</div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOptions;
