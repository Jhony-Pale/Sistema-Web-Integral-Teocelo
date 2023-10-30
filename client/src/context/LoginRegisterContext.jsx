import { createContext, useState, useEffect } from "react";

export const LoginRegisterContext = createContext();

export function LoginRegisterContextProvider(props) {
  const [isLogin, setIsLogin, ] = useState(true);

  function changeIsLogin(value) {
    setIsLogin(value);
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 890);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <LoginRegisterContext.Provider
      value={{
        isLogin,
        changeIsLogin,
        isMobile,
      }}
    >
      {props.children}
    </LoginRegisterContext.Provider>
  );
}
