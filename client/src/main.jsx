import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ExtraDataContextProvider } from "./context/ExtraDataContext";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { PostProvider } from "./context/PostContext.jsx";
import { LampProvider } from "./context/LampContext.jsx";
import { WaterProvider } from "./context/WaterContext.jsx";
import { NatureProvider } from "./context/NatureContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ExtraDataContextProvider>
        <AuthProvider>
          <PostProvider>
            <LampProvider>
              <WaterProvider>
                <NatureProvider>
                  <BrowserRouter>
                    <App />
                  </BrowserRouter>
                </NatureProvider>
              </WaterProvider>
            </LampProvider>
          </PostProvider>
        </AuthProvider>
      </ExtraDataContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
