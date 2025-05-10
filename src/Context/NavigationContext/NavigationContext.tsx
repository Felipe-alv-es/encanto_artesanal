import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextType {
  currentPageNumber: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);

  return (
    <NavigationContext.Provider
      value={{ currentPageNumber, setCurrentPageNumber }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
