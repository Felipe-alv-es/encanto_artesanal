import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export const SplashScreen = () => (
  <Box
    sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: "#000",
      color: "#fff",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999,
    }}
  >
    <CircularProgress color="inherit" />
    <Typography mt={2}>Carregando...</Typography>
  </Box>
);
