import { createContext, useState } from "react";

export const LoginRegisterContext = createContext();

export function LoginRegisterContextProvider(props) {
  const [isLogin, setIsLogin] = useState(true);

  function changeIsLogin(value) {
    setIsLogin(value);
  }

  return (
    <LoginRegisterContext.Provider
      value={{
        isLogin,
        changeIsLogin,
      }}
    >
      {props.children}
    </LoginRegisterContext.Provider>
  );
}
