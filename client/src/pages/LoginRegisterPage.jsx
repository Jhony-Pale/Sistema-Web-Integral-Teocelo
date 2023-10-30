import { useContext, useEffect } from "react";
import { LoginRegisterContext } from "../context/LoginRegisterContext";
import Collage from "../assets/Photos/Collage.png";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import LoginRegisterMV from "../components/LoginRegisterMV";

function LoginRegisterPage() {
  const { isLogin, isMobile } = useContext(LoginRegisterContext);

  useEffect(() => {
    try {
      const collageImg = document.getElementById("CollageImg");

      if (collageImg) {
        isLogin
          ? collageImg.classList.add("animate-leftright")
          : collageImg.classList.add("animate-rightleft");

        const timer = setTimeout(() => {
          collageImg.classList.remove("animate-leftright");
          collageImg.classList.remove("animate-rightleft");
        }, 500);

        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      {isMobile ? (
        <LoginRegisterMV />
      ) : (
        <>
          <img
            src={Collage}
            alt="Imagen login"
            className={`h-screen w-1/2 absolute z-[9999] transition-transform duration-500 ${
              isLogin ? "translate-x-full" : "translate-x-0"
            }`}
            id="CollageImg"
          />
          <div className="grid grid-cols-2">
            <LoginComponent />

            <RegisterComponent />
          </div>
        </>
      )}
    </div>
  );
}

export default LoginRegisterPage;
