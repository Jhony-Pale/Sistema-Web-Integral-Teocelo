import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function ComponentNew({ newComponent }) {
    const urlImage = "/" + newComponent.image
  return (
    <div>
      <img src={urlImage} alt="Imagen" className="w-full rounded-t-2xl" />
      <h1 className="font-montserrat text-[#494848] text-lg font-bold py-2">
        {newComponent.title}
      </h1>
      <h2 className="font-montserrat text-[#A3A3A2] py-2">
        {newComponent.description}
      </h2>
      <h3 className="mx-3 grid grid-cols-2">
        <div className="mb-3 flex items-center justify-start">
          <FontAwesomeIcon icon={faClock} size="xs"/>
          <span className="font-montserrat text-black text-xs ml-2">
            {newComponent.date}
          </span>
        </div>
        <div className="mb-3 flex items-center justify-end">
        <button className="bg-[#6d1610] text-white rounded-2xl py-1 px-2 font-montserrat">
          Leer más
        </button>
            
        </div>
      </h3>
    </div>
  );
}

export default ComponentNew;
