import { useEffect, useState } from "react";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import CabildoAlcalde from "../assets/Photos/CabildoAlcalde.jpg";
import CabildoRegidora from "../assets/Photos/CabildoRegidora.jpg";
import CabildoSindica from "../assets/Photos/CabildoSindica.png";

function Test() {
  const [selectedId, setSelectedId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(items.filter((value) => value.id == selectedId));
    setSelectedImage(images.filter((value) => value.id == selectedId));
  }, [selectedId]);

  const items = [
    {
      id: 1,
      title: "test1",
      subtitle: "subtest1",
    },
    {
      id: 2,
      title: "test2",
      subtitle: "subtest2",
    },
    {
      id: 3,
      title: "test3",
      subtitle: "subtest3",
    },
  ];

  const [selectedImage, setSelectedImage] = useState([
    {
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
    },
  ]);
  const [images, setImages] = useState([
    {
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
    },
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
    },
  ]);

  const handleSelect = (id) => {
    if (isLoading) return;

    if (selectedId) {
      setSelectedId(null);
      setIsLoading(true);
      const timer = setTimeout(() => {
        setSelectedId(id);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    setSelectedId(id);
  };

  return (
    <div className="mt-10 mx-10">
      <div className="h-[27rem]">
        <AnimatePresence className="z-10">
          {selectedId &&
            selectedImage.map((image) => (
              <motion.div layoutId={selectedId} className="flex items-center justify-center gap-10" key={image.id}>
                <motion.img
                  src={image.src}
                  className="px-10 py-5 shadow-lg shadow-gray-400 bg-white w-1/3 max-w-1/3"
                  alt={image.alt}
                />
                <div className="bg-[#EFEFEF] shadow-lg shadow-gray-400 mb-10">
                  <h1 className="text-center text-2xl lg:text-3xl text-[#F9B03C] font-extrabold mt-5">
                    Comisiones
                  </h1>
                  <div className="grid grid-cols-2 m-5 gap-y-2 lg:gap-y-5 pb-5 lg:pb-0">
                    {image.commissions.map((comission, index) => (
                      <div className="flex items-center gap-2" key={index}>
                        <div className="min-h-[1em] min-w-[1em] rounded-full bg-[#F9B03C]"></div>
                        <span className="font-bold text-base">{comission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <MotionConfig>
        <div className="flex justify-center gap-10">
          {images
            .filter((image) => image.id !== selectedId)
            .map((image) => (
              <motion.div
                layoutId={image.id}
                onClick={() => handleSelect(image.id)}
                key={image.id}
                className="px-10 py-5 shadow-lg shadow-gray-400 bg-white w-1/4 cursor-pointer"
                id=""
              >
                <motion.img src={image.src} alt={image.alt} />
              </motion.div>
            ))}
        </div>
      </MotionConfig>
    </div>
  );
}

export default Test;
