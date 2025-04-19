import React from "react";
import { Box, Button } from "@mui/material";
import {
  getFirstProductDetailButtonStyle,
  getProductDetailButtonContainerStyle,
  getSecondProductDetailButtonStyle,
} from "./ProductDetailButton.styles.ts";

const ProductDetailButton = () => {
  return (
    <Box sx={getProductDetailButtonContainerStyle}>
      <Button variant="outlined" sx={getFirstProductDetailButtonStyle}>
        {"Adicionar ao carrinho"}
      </Button>
      <Button variant="outlined" sx={getSecondProductDetailButtonStyle}>
        {"Enviar pedido"}
      </Button>
    </Box>
  );
};

export default ProductDetailButton;
