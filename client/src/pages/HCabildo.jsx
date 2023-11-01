import { useContext, useState } from "react";
import { LoginRegisterContext } from "../context/LoginRegisterContext";
import Footer from "../components/Footer";
import CabildoAlcalde from "../assets/Photos/CabildoAlcalde.jpg";
import CabildoRegidora from "../assets/Photos/CabildoRegidora.jpg";
import CabildoSindica from "../assets/Photos/CabildoSindica.png";

function HCabildo() {
  const { isMobile } = useContext(LoginRegisterContext);

  const [images, setImages] = useState([
    {
      id: 2,
      src: CabildoRegidora,
      alt: "Cabildo - Regidora",
      commissions: [
        "Hacienda y patrimonio municipal",
        "Tránsito y vialidad",
        "Limpia pública",
        "Para la igualdad de género",
        "Bibliotecas, fomento a la lectura y alfabetización",
        "Ornato, parques, jardines y alumbrado",
        "Ciencia y tecnología",
        "Impulso de la juventud",
        "Protección civil",
        "Población",
      ],
      order: 2,
    },
    {
      id: 3,
      src: CabildoSindica,
      alt: "Cabildo - Sindica",
      commissions: [
        "Hacienda y patrimonio municipal",
        "Asentamientos humanos, fraccionamientos, licencias y regularización de la tierra",
        "Fomento agropecuario",
        "Agua potable, alcantarillado, tratamiento y disposiciones de aguas residuales",
        "Desempeño",
        "Transparencia y acceso a la información",
        "Registro civil, panteones y reclutamiento",
        "Gobernación, reglamento y circulares",
        "Para la igualdad de género",
        "Promoción y defensa de los derechos humanos",
        "Desarrollo social, humano y regional",
        "De la niñez y la familia",
      ],
      order: 3,
    },
  ]);
  const [showCommissions, setShowComissions] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    id: 1,
    src: CabildoAlcalde,
    alt: "Cabildo - Alcalde",
    commissions: [
      "Policía y prevención del delito",
      "Educación, recreación, cultura, actos cívicos y fomento deportivo",
      "Salud y asistencia pública",
      "Comunicación y obras públicas",
      "Participación ciudadana y vecinal",
      "Comercios,  centrales de abastos, mercados y rastros",
      "Fomento forestal, ecología y medio ambiente",
      "Turismo",
      "Desarrollo económico",
      "Planeación de Desarrollo Municipal",
    ],
    order: 1,
  });

  const handleThumbnailClick = (imageId) => {
    const clickedImage = images.find((image) => image.id === imageId);
    const indexImage = images.findIndex((image) => image.id === imageId);
    const updateImages = [...images];
    if (clickedImage && indexImage >= 0) {
      const beforeOrder = clickedImage.order;
      clickedImage.order = selectedImage.order;
      selectedImage.order = beforeOrder;
      updateImages[indexImage] = selectedImage;

      if (beforeOrder != 1) {
        console.log(beforeOrder);
        document
          .getElementById(imageId)
          .classList.add(
            beforeOrder === 2
              ? showCommissions
                ? isMobile ? "animate-moveuptopright" : "animate-moveuptop"
                : "animate-moveuptopright"
              : "animate-moveuptopleft"
          );
        const timer = setTimeout(() => {
          document
            .getElementById(imageId)
            .classList.remove(
              beforeOrder === 2
                ? showCommissions
                  ? "animate-moveuptop"
                  : "animate-moveuptopright"
                : "animate-moveuptopleft"
            );
          setSelectedImage(clickedImage);
          setImages(updateImages);
          setShowComissions(true);
        }, 500);

        return () => clearTimeout(timer);
      }
    }

    if (!showCommissions && !isMobile) {
      document.getElementById(imageId).classList.add("animate-rightleft");
      const timer = setTimeout(() => {
        document.getElementById(imageId).classList.remove("animate-rightleft");
      }, 500);

      clearTimeout(timer);
    }
    setShowComissions(true);
  };

  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center">
          <span>H. Cabildo</span>
        </div>
        {isMobile && showCommissions ? (
          <div className="mx-10 bg-[#EFEFEF] shadow-lg shadow-gray-400 mb-10 animate-rightleft">
            <h1 className="text-center text-2xl lg:text-3xl text-[#F9B03C] font-extrabold mt-5">
              Comisiones
            </h1>
            <div className="grid grid-cols-2 m-5 gap-y-2 lg:gap-y-5 pb-5 lg:pb-0">
              {selectedImage.commissions.map((comission, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <div className="min-h-[1em] min-w-[1em] rounded-full bg-[#F9B03C]"></div>
                  <span className="font-bold text-base">{comission}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="w-full grid grid-cols-2 mt-5">
          <div className="flex justify-center col-span-2">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="px-10 py-5 shadow-lg shadow-gray-400 bg-white w-2/5 lg:w-[38%] mb-10 max-h-[25rem]"
              onClick={() => handleThumbnailClick(selectedImage.id)}
              id={selectedImage.id}
            />
            {showCommissions && !isMobile ? (
              <div className="basis-1/2 ml-10 bg-[#EFEFEF] shadow-lg shadow-gray-400 mb-10 animate-rightleft">
                <h1 className="text-center text-3xl text-[#F9B03C] font-extrabold mt-5">
                  Comisiones
                </h1>
                <div
                  className={`grid grid-cols-2 m-5 ${
                    selectedImage.id === 3 ? "gap-y-1" : "gap-y-5"
                  }`}
                >
                  {selectedImage.commissions.map((comission, index) => (
                    <div className="flex items-center gap-2" key={index}>
                      <div className="min-h-[1em] min-w-[1em] rounded-full bg-[#F9B03C]"></div>
                      <span className="font-bold text-xl">{comission}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {images.map((image) => (
            <div className="flex justify-center" key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                className="px-10 py-5 shadow-lg shadow-gray-400 bg-white w-4/5 lg:w-[78%] max-h-[26rem]"
                onClick={() => handleThumbnailClick(image.id)}
                id={image.id}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HCabildo;
