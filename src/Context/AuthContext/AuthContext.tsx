import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, senha: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email: string, senha: string) => {
    if (email === "admin@email.com" && senha === "123456") {
      setIsAuthenticated(true);
    } else {
      alert("Credenciais inválidas!");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
