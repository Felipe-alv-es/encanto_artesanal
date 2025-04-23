import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { getShoppingCartFooterButtonStyle } from "./ShoppingCartFooter.styles.ts";
import { useSendWhatsapp } from "../../../../../../Hooks/UseSendToWhatsapp/index.tsx";

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
  const { sendProducts } = useSendWhatsapp("551191229-7241");

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
        onClick={() => sendProducts(cartItems)}
      >
        {"Enviar pedido"}
      </Button>
    </Box>
  );
});

export default ShoppingCartFooter;
