import React, { createContext, useState, ReactNode } from "react";

// Define types for context
interface LangContextType {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with the type
const LangContext = createContext<LangContextType | undefined>(undefined);

// Create a provider component that holds the state
export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<string>("lt");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContext };
