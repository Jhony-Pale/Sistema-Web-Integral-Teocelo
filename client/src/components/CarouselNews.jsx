import SeparadorIzquierdo from "../assets/Extras/SeparadorIzquierdo.png";
import SeparadorDerecho from "../assets/Extras/SeparadorDerecho.png";
import ComponentNew from "./ComponentNew";
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useExtaData } from "../context/ExtraDataContext";

function CarouselImages() {
  const [news, setNews] = useState([
    {
      image: "NoticiaBaxtla.png",
      title:
        "Construcción de drenaje sanitario con biodigestor en la localidad de Baxtla.",
      description:
        "Teocelo, Ver.- Esta obra es un paso significativo hacia el mejoramiento de la calidad de vida en nuestra querida localidad de Baxtla. Con la construcción de...",
      date: "10 de Octubre del 2023",
    },
    {
      image: "NoticiaPrevencionEmbarazo.png",
      title:
        "Día Nacional de la Prevención del Embarazo no Planificado en Adolescentes.",
      description:
        "Teocelo, Ver.- Desde el año 2006, cada 26 de septiembre en nuestro país se conmemora el Día Nacional de la Prevención del Embarazo no planificado en...",
      date: "05 de Octubre del 2023",
    },
    {
      image: "NoticiaSimulacro.png",
      title:
        "El municipio de Teocelo se suma al segundo simulacro nacional 2023.",
      description:
        "Teocelo, Ver.- Con el objetivo de promover una cultura de prevención en materia de Protección Civil, se llevaron a cabo simulacros de sismo en diferentes escuelas...",
      date: "10 de Octubre del 2023",
    },
    {
      image: "NoticiaBaxtla.png",
      title:
        "Construcción de drenaje sanitario con biodigestor en la localidad de Baxtla.",
      description:
        "Teocelo, Ver.- Esta obra es un paso significativo hacia el mejoramiento de la calidad de vida en nuestra querida localidad de Baxtla. Con la construcción de...",
      date: "10 de Octubre del 2023",
    },
    {
      image: "NoticiaPrevencionEmbarazo.png",
      title:
        "Día Nacional de la Prevención del Embarazo no Planificado en Adolescentes.",
      description:
        "Teocelo, Ver.- Desde el año 2006, cada 26 de septiembre en nuestro país se conmemora el Día Nacional de la Prevención del Embarazo no planificado en...",
      date: "05 de Octubre del 2023",
    },
    {
      image: "NoticiaSimulacro.png",
      title:
        "El municipio de Teocelo se suma al segundo simulacro nacional 2023.",
      description:
        "Teocelo, Ver.- Con el objetivo de promover una cultura de prevención en materia de Protección Civil, se llevaron a cabo simulacros de sismo en diferentes escuelas...",
      date: "10 de Octubre del 2023",
    },
    {
      image: "NoticiaSimulacro.png",
      title:
        "El municipio de Teocelo se suma al segundo simulacro nacional 2023.",
      description:
        "Teocelo, Ver.- Con el objetivo de promover una cultura de prevención en materia de Protección Civil, se llevaron a cabo simulacros de sismo en diferentes escuelas...",
      date: "10 de Octubre del 2023",
    },
  ]);
  const { isMobile } = useExtaData();

  const sliceArray = () => {
    if(news.length > 5){

      const _news = news.slice(0, 5)
      _news.push({position: "More"})
      return _news
    }
    else{
      const _news = news
      _news.push({position: "More"})
      return _news
    }
  }
  const newsSliced = sliceArray()


  const organizedNews = newsSliced.reduce((acc, curr, index) => {
    const groupIndex = Math.floor(index / (isMobile ? 2 : 3));

    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }

    acc[groupIndex].push(curr);
    return acc;
  }, []);

  return (
    <div className="bg-[#efeeee]">
      <div className="flex items-center justify-center pt-8">
        <img
          src={SeparadorIzquierdo}
          alt="Separador izquierdo"
          className="tranform scale-[0.4] lg:scale-100 mr-[-50px] lg:mr-0"
        />
        <p className="font-extrabold text-center text-2xl lg:text-3xl lg:mx-5">
          NOTICIAS Y COMUNICADOS
        </p>
        <img
          src={SeparadorDerecho}
          alt="Separador derecho"
          className="tranform scale-[0.4] lg:scale-100 ml-[-50px] lg:ml-0"
        />
      </div>
      <Carousel autoplay={true} loop={true} className="z-0">
        {organizedNews.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className={`flex h-full w-full px-4 mb-5`}
          >
            {group.map((new_, index) => (
              <div key={index} className={`m-10 bg-white rounded-2xl ${group.length === 1 ? (isMobile ? "basis-1/2" : "basis-1/3") : "basis-full"}`}>
                <ComponentNew newComponent={new_} />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselImages;
