import { Carousel } from "@material-tailwind/react";
import LogoIMM from "../assets/Logos/LogoIMM.png";
import PCTeocelo from "../assets/Logos/PCTeocelo.png";
import DIFH from "../assets/Logos/DIFH.png";

function Directors() {
  return (
    <div className="mt-20">
      <div className="font-extrabold text-center text-4xl pt-5 mb-10">
        DIRECCIONES
      </div>
      <div className="bg-[#EFEEEE] px-4 pt-10">
        <Carousel autoplay={false} loop={false}>
          <div className="flex items-center w-full px-4 gap-10 mb-10">
            <div className="grow basis-[14%]">
              <img src={LogoIMM} alt="Imagen del logo IMM" />
            </div>
            <div className="grow basis-1/6">
              <img src={PCTeocelo} alt="Imagen del logo Teocelo" />
            </div>
            <div className="grow basis-[14%]">
              <img src={DIFH} alt="Imagen del logo DIF" />
            </div>
          </div>
          <div className="flex items-center w-full px-4 gap-10 mb-10">
            <div className="grow">
              <img src={LogoIMM} alt="Imagen del logo IMM" />
            </div>
            <div className="grow">
              <img src={PCTeocelo} alt="Imagen del logo Teocelo" />
            </div>
            <div className="grow">
              <img src={DIFH} alt="Imagen del logo DIF" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Directors;
