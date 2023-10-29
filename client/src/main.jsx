import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { LoginRegisterContextProvider } from "./context/LoginRegisterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LoginRegisterContextProvider>
        <App />
      </LoginRegisterContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
