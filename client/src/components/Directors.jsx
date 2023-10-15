import { Carousel } from "@material-tailwind/react";
import LogoIMM from "../assets/LogoIMM.png";
import PCTeocelo from "../assets/PCTeocelo.png";
import DIFH from "../assets/DIFH.png";

function Directors() {
  return (
    <div className="mt-20">
      <div className="font-extrabold text-center text-4xl pt-5 mb-10">
        DIRECCIONES
      </div>
      <div className="bg-[#EFEEEE] px-4">
        <Carousel autoplay="true" loop="true">
          <div className="flex h-full w-full px-4 gap-10">
            <div className="m-10 bg-white rounded-2xl">
              <img src={LogoIMM} alt="Imagen del logo IMM" />
            </div>
            <div className="m-10 bg-white rounded-2xl">
              <img src={PCTeocelo} alt="Imagen del logo Teocelo" />
            </div>
            <div className="m-10 bg-white rounded-2xl">
              <img src={DIFH} alt="Imagen del logo DIF" />
            </div>
          </div>
          <div className="flex h-full w-full px-4 gap-10">
            <div className="m-10 bg-white rounded-2xl">
              <img src={LogoIMM} alt="Imagen del logo IMM" />
            </div>
            <div className="m-10 bg-white rounded-2xl">
              <img src={PCTeocelo} alt="Imagen del logo Teocelo" />
            </div>
            <div className="m-10 bg-white rounded-2xl">
              <img src={DIFH} alt="Imagen del logo DIF" />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Directors;
