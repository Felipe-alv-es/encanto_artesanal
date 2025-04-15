import { Box, TextField, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/AuthContext.tsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/product-management");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await login(email, senha);
    navigate("/product-management");
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "64px",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "40%" }}
      >
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h4" fontWeight={"bold"}>
            Login
          </Typography>
        </Box>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <TextField
          label="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
        />
        <Button type="submit" variant="outlined" color="inherit">
          Entrar
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
