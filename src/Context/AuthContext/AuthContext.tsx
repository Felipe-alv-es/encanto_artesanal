import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, senha: string) => void;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    console.log(savedToken);

    if (savedToken) {
      axios
        .get("https://encanto-artesanal-back.onrender.com/api/validate-token", {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        })
        .then((res) => {
          setToken(savedToken);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          localStorage.removeItem("authToken");
          setIsAuthenticated(false);
          setToken(null);
        });
    }
  }, []);

  const login = async (email: string, senha: string) => {
    try {
      const response = await axios.post(
        "https://encanto-artesanal-back.onrender.com/api/login",
        {
          email,
          senha,
        }
      );
      const { token } = response.data;

      setToken(token);
      setIsAuthenticated(true);

      localStorage.setItem("authToken", token);
    } catch (error) {
      alert("Credenciais inválidas!");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
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
