import { useState } from "react";
import { Alert } from "@material-tailwind/react";
import { useExtaData } from "../context/ExtraDataContext";
import { LuSearch } from "react-icons/lu";
import { FiAlertCircle } from "react-icons/fi";
import Footer from "../components/Footer";

function MunicipalDirectoryPage() {
  const { isMobile } = useExtaData();
  const personal = [
    {
      area: "Presidencia",
      name: "Lic. Isaac Alberto Anell Reyes",
      ubication: {
        place: "Palacio municipal",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "presidencia.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Sindicatura",
      name: "C. Daniela Villegas Olmos",
      ubication: {
        place: "Palacio municipal",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "sindicatura.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Regiduría",
      name: "Lic. Gloria Águeda García García",
      ubication: {
        place: "Palacio municipal",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "regiduria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Secretaría",
      name: "L.A.E. José Ramón Vega Andrade",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "secretaria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Archivo Municipal",
      name: "C. Ada Alicia tlaxcalteco Andrade",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Correo No Disponible",
      },
    },
    {
      area: "Órgano De Control Interno",
      name: "L.A.E. Jaqueline Fuentes Valdivia",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "contraloria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Investigación",
      name: "L.A. diana izbeth cabrera reyes",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "contraloria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Sustanción",
      name: "Pendiente",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "contraloria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Tesorería",
      name: "L.C.P. José Pablo Rosado Molina",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "tesoreria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Ingresos",
      name: "L.A. Carmela Rosario Molina Sánchez",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "tesoreria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Egresos",
      name: "Ing. Jonathan Velázquez Hernández",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "tesoreria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Contabilidad",
      name: "L.C.P. José ManuelHhuerta Landa",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "tesoreria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Nómina Y Adquisiciones",
      name: "L.A.E. José Antonio Estrada Domínguez",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "tesoreria.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Catastro",
      name: "C.P. José Bernardino Valdivia López",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Correo no disponible",
      },
    },
    {
      area: "Unidad Jurídica",
      name: "Lic. Rommel Caín Chacan Pale",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "juridico.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Coordinación de Programas Sociales",
      name: "Pendiente",
      ubication: {
        place: "Pendiente",
        street: "Calle Pendiente",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Informática",
      name: "L.S.C.A. Carlos Arturo Valdivia Arcos",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "informatica.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Unidad De Transparencia",
      name: "L.R.I. José Julián Morales Andrade",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "transparencia.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Registro Civil",
      name: "T.S.U. Zayra Vanessa García Bustos",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Correo no disponible",
      },
    },
    {
      area: "Oficialía Mayor",
      name: "C. Gustavo Andrade López",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "oficialmayor2225@gmail.com",
      },
    },
    {
      area: "Oficialía De Partes",
      name: "Pendiente",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Correo no disponible",
      },
    },
    {
      area: "Servicios Generales",
      name: "C. Isidro Velis García",
      ubication: {
        place: "Pendiente",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Correo no disponible",
      },
    },
    {
      area: "Rastro Municipal",
      name: "C. Clemente Cosme Caricio",
      ubication: {
        place: "Pendiente",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Correo no disponible",
      },
    },
    {
      area: "Dirección De Obras Públicas",
      name: "Ing. Jesús Rafael Sánchez Sánchez",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "obras.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Ramo 033",
      name: "C. Sergio Gonzáles Pérez",
      ubication: {
        place: "Pendiente",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "DIMJUVE",
      name: "L.E. José Alberto Reyes Izaguirre",
      ubication: {
        place: "Palacio municipal",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "teocelojuventud@gmail.com",
      },
    },
    {
      area: "Dirección De Desarrollo Económico",
      name: "L.S. José De Jesús Mora Hernández",
      ubication: {
        place: "Palacio Municipal",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Comercio",
      name: "C. José Luis Tapia Olmos",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Dirección De Medio Ambiente Y Desarrollo Sostenible",
      name: "Biol. Eduardo Méndez Sánchez",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Dirección De Educación, Cultura Y Deporte",
      name: "Biol. Eduardo Méndez Sánchez",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Fomento Deportivo",
      name: "Pendiente",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Dirección De Agua Potable Y Saneamiento",
      name: "C. Francisco Antonio Sánchez Retureta",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Turismo",
      name: "L.A.E.T Daniel Andrés Morales Pérez",
      ubication: {
        place: "Edificio del H. Ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "DIF Municipal",
      name: "L.E.P. Zayra Larios Alducin",
      ubication: {
        place: "Pendiente",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "dif.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "DIF - Procuraduría",
      name: "Pendiente",
      ubication: {
        place: "Pendiente",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "dif.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "DIF - Jurídico",
      name: "Pendiente",
      ubication: {
        place: "Pendiente",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "dif.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "DIF - Psicología",
      name: "Pendiente",
      ubication: {
        place: "Pendiente",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "dif.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Trabajo Social",
      name: "L.T.S. Caridad Vázquez Morales",
      ubication: {
        place: "Pendiente",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Dirección De Protección Civil",
      name: "C. Gabriel Galván Anell",
      ubication: {
        place: "Edificio del H. ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Dirección De Seguridad Pública",
      name: "C. Taurino Enrique Landa Luna",
      ubication: {
        place: "Edificio del H. ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "Pendiente",
      },
    },
    {
      area: "Instituto Municipal De La Mujer",
      name: "Lic. Alejandra Pelayo Trujillo",
      ubication: {
        place: "Edificio del H. ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "immujer.teocelo@veracruz.gob.mx",
      },
    },
    {
      area: "Dirección De Comunicación Social",
      name: "Lic. Daniel Alexis Mendoza Valdivia",
      ubication: {
        place: "Edificio del H. ayuntamiento",
        street: "Calle Juan Díaz Covarrubias S/N",
        neighborhood: "Col. Centro",
        cp: "C.P. 91615",
      },
      contacts: {
        phone: "2288210328",
        email: "comunicacion.social.teo@gmail.com",
      },
    },
  ];

  const [showPersonal, setShowPersonal] = useState(personal);

  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchPersonal();
    }
  };

  const handleSearchPersonal = () => {
    const inputValueFixed = inputValue.trimStart();
    if (inputValueFixed != "") {
      const refreshPersonal = personal.filter(
        (person) =>
          person.area === inputValueFixed || person.name === inputValueFixed
      );

      return setShowPersonal(refreshPersonal);
    }

    setShowPersonal(personal);
  };

  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center">
          <span>Directorio Municipal</span>
        </div>
        <div className="mx-10">
          <div className="flex flex-row-reverse mt-5 mr-5">
            <div className="relative ml-14 w-[23rem]">
              <input
                type="text"
                placeholder="¿A qué área o persona estás buscando?"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                name="searchValue"
                className="w-full text-black pr-10 pl-2 py-2 rounded-lg border-[3px] border-[#6D1610] bg-white block placeholder-black font-montserrat"
              />
              <div className="absolute inset-y-0 right-0 px-[0.40rem] m-[0.5rem] flex items-center text-sm leading-5 bg-[#6D1610] rounded-md cursor-pointer">
                <LuSearch
                  size="1.5em"
                  style={{ color: "#ffffff" }}
                  onClick={handleSearchPersonal}
                />
              </div>
            </div>
          </div>
          <div
            className={`grid ${
              isMobile ? "grid-cols-1 md:grid-cols-2" : "grid-cols-3"
            } place-items-center gap-x-5 gap-y-10 font-montserrat mt-10`}
          >
            {showPersonal.length > 0 ? (
              <>
                {showPersonal.map((person, index) => (
                  <div
                    className="shadow-lg shadow-gray-500 w-[90%] border-t-8 border-[#6D1610]"
                    key={index}
                  >
                    <div className="flex items-center justify-center text-center py-2 text-2xl font-extrabold text-[#6D1610]">
                      <h1>{person.area}</h1>
                    </div>
                    <div className="bg-[#EFEFEF] mx-3 mb-5">
                      <h1 className="bg-[#6D1610] text-lg text-center text-white py-2">
                        {person.name}
                      </h1>
                      <div className="flex flex-col gap-5 p-2 break-all">
                        <div className="flex items-center gap-3">
                          <p>Ubicación:</p>
                          <p className="flex flex-col">
                            <span>{person.ubication.place}</span>
                            <span>{person.ubication.street}</span>
                            <span>{person.ubication.neighborhood}</span>
                            <span>{person.ubication.cp}</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-5">
                          <p>Contacto:</p>
                          <p className="flex flex-col">
                            <span>{person.contacts.phone}</span>
                            <span>{person.contacts.email}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
          {showPersonal.length === 0 ? (
            <div className="">
              <Alert
                className="bg-[#6D1610]"
                icon={<FiAlertCircle size="1.5em" />}
              >
                No se encontró ningún resultado.
              </Alert>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MunicipalDirectoryPage;
