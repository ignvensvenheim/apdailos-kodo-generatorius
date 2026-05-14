import React, { createContext, useContext, useState, ReactNode } from "react";

// Strict context type — no optional fields
interface ContextType {
  stdImage: string;
  setStdImage: React.Dispatch<React.SetStateAction<string>>;
  selectName: string;
  setSelectName: React.Dispatch<React.SetStateAction<string>>;
  showStdSurfWarning: boolean;
  setShowStdSurfWarning: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [stdImage, setStdImage] = useState<string>("");
  const [selectName, setSelectName] = useState<string>("");
  const [showStdSurfWarning, setShowStdSurfWarning] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        stdImage,
        setStdImage,
        selectName,
        setSelectName,
        showStdSurfWarning,
        setShowStdSurfWarning,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context };
