import React, { createContext, useContext, useState, ReactNode } from "react";

// Strict context type — no optional fields
interface ContextType {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  stdImage: string;
  setStdImage: React.Dispatch<React.SetStateAction<string>>;
  defaultInputVal: string;
  setDefaultInputVal: React.Dispatch<React.SetStateAction<string>>;
}

// Create context with undefined default (forces provider check)
const Context = createContext<ContextType | undefined>(undefined);

// Export custom hook to safely use context
export const useContextData = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context must be used within a ContextProvider");
  }
  return context;
};

// Context provider
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<string>("lt");
  const [stdImage, setStdImage] = useState<string>("");
  const [defaultInputVal, setDefaultInputVal] = useState<string>("default");

  return (
    <Context.Provider
      value={{
        lang,
        setLang,
        stdImage,
        setStdImage,
        defaultInputVal,
        setDefaultInputVal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context };
