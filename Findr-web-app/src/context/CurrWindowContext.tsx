import React, { createContext, useContext, useState } from "react";

type CurrWindow = "ADMIN" | "DOCTOR";

interface CurrWindowContextType {
  currWindow: CurrWindow;
  setCurrWindow: (role: CurrWindow) => void;
}

const CurrWindowContext = createContext<CurrWindowContextType | undefined>(
  undefined
);

export const CurrWindowProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currWindow, setCurrWindow] = useState<CurrWindow>("DOCTOR");
  return (
    <CurrWindowContext.Provider value={{ currWindow, setCurrWindow }}>
      {children}
    </CurrWindowContext.Provider>
  );
};

export const useCurrWindow = (): CurrWindowContextType => {
  const context = useContext(CurrWindowContext);
  if (!context)
    throw new Error(
      "useCurrWindow must be used within a <RoleProvider> component"
    );
  return context;
};
