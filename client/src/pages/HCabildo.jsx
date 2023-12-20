import { useExtaData } from "../context/ExtraDataContext";
import CabildoMobile from "../components/CabildoMobile";
import CabildoPC from "../components/CabildoPC";

function HCabildo() {
  const { isMobile } = useExtaData();

  return (
    <div>
      <div className="bg-white pt-6 pb-8 mt-5">
        <div className="w-full h-14 bg-[#6D1610] text-white font-extrabold text-2xl lg:text-4xl flex items-center justify-center">
          <span>H. Cabildo</span>
        </div>
        {isMobile ? <CabildoMobile /> : <CabildoPC />}
      </div>
    </div>
  );
}

export default HCabildo;
