import { useContext, useEffect } from "react";
import { LoginRegisterContext } from "../context/LoginRegisterContext";
import Collage from "../assets/Photos/Collage.png";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";

function LoginRegisterPage() {
  const { isLogin } = useContext(LoginRegisterContext);

  useEffect(() => {
    isLogin
      ? document.getElementById("CollageImg").classList.add("animate-leftright")
      : document
          .getElementById("CollageImg")
          .classList.add("animate-rightleft");
    const timer = setTimeout(() => {
      document.getElementById("CollageImg").classList.remove("animate-leftright");
      document.getElementById("CollageImg").classList.remove("animate-rightleft");
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
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
    </div>
  );
}

export default LoginRegisterPage;
