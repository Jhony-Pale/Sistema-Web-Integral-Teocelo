import InauguracionObra from "../assets/InauguracionObra.png";
import { Carousel, Typography } from "@material-tailwind/react";

function CarouselImages() {
  return (
    <div className="bg-[#efeeee] mt-5 px-5">
      <Carousel className="rounded-xl">
        <div className="relative h-full w-full">
          <img
            src={InauguracionObra}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 grid h-40 w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-3xl font-montserrat"
              >
                Inauguración de la obra “Construcción de sanitarios con
                biodigestores”
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={InauguracionObra}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 grid h-40 w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-3xl font-montserrat"
              >
                Inauguración de la obra “Construcción de sanitarios con
                biodigestores”
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={InauguracionObra}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 grid h-40 w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-3xl font-montserrat"
              >
                Inauguración de la obra “Construcción de sanitarios con
                biodigestores”
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselImages;
