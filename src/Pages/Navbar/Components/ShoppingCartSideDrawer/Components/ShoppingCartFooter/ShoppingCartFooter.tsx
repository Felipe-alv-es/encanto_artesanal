import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { getShoppingCartFooterButtonStyle } from "./ShoppingCartFooter.styles.ts";

interface CartItem {
  id: number;
  name: string;
  price: string;
  imgSrc: string[];
  imgAlt: string;
  quantity: number;
}

interface ShoppingCartFooterProps {
  cartItems: CartItem[];
}

export const ShoppingCartFooter = React.forwardRef<
  HTMLDivElement,
  ShoppingCartFooterProps
>(({ cartItems }, ref) => {
  return (
    <Box sx={{ padding: "16px", borderTop: "1px solid #eee" }}>
      <Typography variant="body2" color="textSecondary">
        {`Total de itens:
        ${cartItems.reduce((acc, item) => acc + item.quantity, 0)}`}
      </Typography>
      <Button
        variant="outlined"
        fullWidth
        sx={getShoppingCartFooterButtonStyle}
      >
        {"Enviar pedido"}
      </Button>
    </Box>
  );
});

export default ShoppingCartFooter;
