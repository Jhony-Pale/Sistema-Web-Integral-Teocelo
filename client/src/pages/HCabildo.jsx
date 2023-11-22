import { useState } from "react";
import { useExtaData } from "../context/ExtraDataContext";
import Footer from "../components/Footer";
import CabildoAlcalde from "../assets/Photos/CabildoAlcalde.jpg";
import CabildoRegidora from "../assets/Photos/CabildoRegidora.jpg";
import CabildoSindica from "../assets/Photos/CabildoSindica.png";
import CabildoMobile from "../components/CabildoMobile";
import CabildoPC from "../components/CabildoPC";

function HCabildo() {
  const { isMobile } = useExtaData();

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
        "Fomento agropecuario",
        "Asentamientos humanos, fraccionamientos, licencias y regularización de la tierra",
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
        {isMobile ? <CabildoMobile /> : <CabildoPC />}
      </div>
      <Footer />
    </div>
  );
}

export default HCabildo;
