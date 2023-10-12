import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import InauguracionObra from "../assets/InauguracionObra.png";

function CarouselImages() {
  return (
    <div className="bg-[#efeeee]">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        emulateTouch={true}
        className="p-5 mt-1"
      >
        <div>
          <img src={InauguracionObra} alt="Imagen 1" className="h-[70vh]" />
          <p className="legend h-48 -mb-10 rounded-none">
          <span className="font-montserrat text-3xl">Inauguración de la obra “Construcción de sanitarios con biodigestores”</span>
          </p>
        </div>
        <div>
          <img src={InauguracionObra} alt="Imagen 2" className="h-[70vh]" />
          <p className="legend h-48 -mb-10 rounded-none">
          <span className="font-montserrat text-3xl">Inauguración de la obra “Construcción de sanitarios con biodigestores”</span>
          </p>
        </div>
        <div>
          <img src={InauguracionObra} alt="Imagen 3" className="h-[70vh]" />
          <p className="legend h-48 -mb-10 rounded-none">
          <span className="font-montserrat text-3xl">Inauguración de la obra “Construcción de sanitarios con biodigestores”</span>
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselImages;
