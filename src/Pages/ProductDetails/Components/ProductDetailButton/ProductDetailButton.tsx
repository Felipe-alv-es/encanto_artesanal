import React from "react";
import { Box, Button } from "@mui/material";
import {
  getFirstProductDetailButtonStyle,
  getProductDetailButtonContainerStyle,
  getSecondProductDetailButtonStyle,
} from "./ProductDetailButton.styles.ts";

interface ProductDetailButtonProps {
  addToCart?: () => void;
}

const ProductDetailButton = React.forwardRef<
  HTMLDivElement,
  ProductDetailButtonProps
>(({ addToCart }, ref) => {
  return (
    <Box sx={getProductDetailButtonContainerStyle}>
      <Button
        variant="outlined"
        sx={getFirstProductDetailButtonStyle}
        onClick={addToCart}
      >
        {"Adicionar ao carrinho"}
      </Button>
      <Button variant="outlined" sx={getSecondProductDetailButtonStyle}>
        {"Enviar pedido"}
      </Button>
    </Box>
  );
});

export default ProductDetailButton;
