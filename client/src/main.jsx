import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ExtraDataContextProvider } from "./context/ExtraDataContext";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ExtraDataContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ExtraDataContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
