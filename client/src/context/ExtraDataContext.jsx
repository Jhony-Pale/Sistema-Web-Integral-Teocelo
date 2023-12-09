import { createContext, useState, useEffect, useContext } from "react";

export const ExtraDataContext = createContext();

export const useExtaData = () => {
  const context = useContext(ExtraDataContext);
  if (!context) {
    throw new Error("useExtraData must be used within an AuthProvider");
  }
  return context;
};

export function ExtraDataContextProvider(props) {
  const [isLogin, setIsLogin, ] = useState(true);
  const imageUrl = "http://localhost:4000/public/images/"

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
    <ExtraDataContext.Provider
      value={{
        isLogin,
        isMobile,
        imageUrl,
        changeIsLogin,
      }}
    >
      {props.children}
    </ExtraDataContext.Provider>
  );
}
