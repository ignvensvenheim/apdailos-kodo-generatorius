import React, { createContext, useState, ReactNode } from "react";

// Define types for context
interface DefaultInputValContextType {
  defaultInputVal: string;
  setDefaultInputVal: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with the type
const DefaultInputValContext = createContext<
  DefaultInputValContextType | undefined
>(undefined);

// Create a provider component that holds the state
export const DefaultValProvider = ({ children }: { children: ReactNode }) => {
  const [defaultInputVal, setDefaultInputVal] = useState<string>("default");

  return (
    <DefaultInputValContext.Provider
      value={{ defaultInputVal, setDefaultInputVal }}
    >
      {children}
    </DefaultInputValContext.Provider>
  );
};

export { DefaultInputValContext };
