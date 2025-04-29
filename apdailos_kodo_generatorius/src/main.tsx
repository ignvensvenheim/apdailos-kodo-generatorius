import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LangProvider } from "./context/LangContext.tsx";
import { DefaultValProvider } from "./context/DefaultInputValContext.tsx";

createRoot(document.getElementById("root")!).render(
  <LangProvider>
    <DefaultValProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </DefaultValProvider>
  </LangProvider>
);
