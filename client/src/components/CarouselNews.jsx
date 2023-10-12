import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SeparadorIzquierdo from "../assets/SeparadorIzquierdo.png";
import SeparadorDerecho from "../assets/SeparadorDerecho.png";
import ComponentNew from "./ComponentNew";

function CarouselImages() {
  return (
    <div className="bg-[#efeeee]">
      <div className="flex items-center justify-center pt-8">
        <img src={SeparadorIzquierdo} alt="Separador izquierdo" />
        <p className="font-extrabold text-3xl mx-5">NOTICIAS Y COMUNICADOS</p>
        <img
          src={SeparadorDerecho}
          alt="Separador derecho"
          className="transform scaleX(1)"
        />
      </div>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={false}
        interval={3000}
        emulateTouch={true}
        className="mx-10"
      >
        <div className="flex">
          <div className="m-10 bg-white rounded-2xl">
            <ComponentNew
              newComponent={{
                image: "NoticiaBaxtla.png",
                title:
                  "Construcción de drenaje sanitario con biodigestor en la localidad de Baxtla.",
                description:
                  "Teocelo, Ver.- Esta obra es un paso significativo hacia el mejoramiento de la calidad de vida en nuestra querida localidad de Baxtla. Con la construcción de...",
                date: "10 de Octubre del 2023",
              }}
            />
          </div>
          <div className="m-10 bg-white rounded-2xl">
            <ComponentNew
              newComponent={{
                image: "NoticiaPrevencionEmbarazo.png",
                title:
                  "Día Nacional de la Prevención del Embarazo no Planificado en Adolescentes.",
                description:
                  "Teocelo, Ver.- Desde el año 2006, cada 26 de septiembre en nuestro país se conmemora el Día Nacional de la Prevención del Embarazo no planificado en...",
                date: "05 de Octubre del 2023",
              }}
            />
          </div>
          <div className="m-10 bg-white rounded-2xl">
            <ComponentNew
              newComponent={{
                image: "NoticiaSimulacro.png",
                title:
                  "El municipio de Teocelo se suma al segundo simulacro nacional 2023.",
                description:
                  "Teocelo, Ver.- Con el objetivo de promover una cultura de prevención en materia de Protección Civil, se llevaron a cabo simulacros de sismo en diferentes escuelas...",
                date: "10 de Octubre del 2023",
              }}
            />
          </div>
        </div>
        <div className="flex">
          <div className="m-10 bg-white rounded-2xl">
            <ComponentNew
              newComponent={{
                image: "NoticiaBaxtla.png",
                title:
                  "Construcción de drenaje sanitario con biodigestor en la localidad de Baxtla.",
                description:
                  "Teocelo, Ver.- Esta obra es un paso significativo hacia el mejoramiento de la calidad de vida en nuestra querida localidad de Baxtla. Con la construcción de...",
                date: "10 de Octubre del 2023",
              }}
            />
          </div>
          <div className="m-10 bg-white rounded-2xl">
            <ComponentNew
              newComponent={{
                image: "NoticiaPrevencionEmbarazo.png",
                title:
                  "Día Nacional de la Prevención del Embarazo no Planificado en Adolescentes.",
                description:
                  "Teocelo, Ver.- Desde el año 2006, cada 26 de septiembre en nuestro país se conmemora el Día Nacional de la Prevención del Embarazo no planificado en...",
                date: "05 de Octubre del 2023",
              }}
            />
          </div>
          <div className="m-10 bg-white rounded-2xl">
            <ComponentNew
              newComponent={{
                image: "NoticiaSimulacro.png",
                title:
                  "El municipio de Teocelo se suma al segundo simulacro nacional 2023.",
                description:
                  "Teocelo, Ver.- Con el objetivo de promover una cultura de prevención en materia de Protección Civil, se llevaron a cabo simulacros de sismo en diferentes escuelas...",
                date: "10 de Octubre del 2023",
              }}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselImages;
