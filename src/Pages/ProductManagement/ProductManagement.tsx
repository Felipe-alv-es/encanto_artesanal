import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const ProductManagement = () => {
  return (
    <Box sx={{ background: "#6bb4ad", height: "100vh", textAlign: "center" }}>
      <Typography variant="h1" color="#F2F2F2" fontWeight={"bold"}>
        ProductManagement
      </Typography>
      <Box sx={{ margin: "32px" }}>
        <TextField label="titulo"></TextField>
        <TextField label="Descrição"></TextField>
        <TextField label="URL"></TextField>
      </Box>
    </Box>
  );
};

export default ProductManagement;
