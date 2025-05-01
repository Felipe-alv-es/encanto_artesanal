import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  getFirstShoppingCartFooterButtonStyle,
  getSecondShoppingCartFooterButtonStyle,
} from "./ShoppingCartFooter.styles.ts";
import { useSendWhatsapp } from "../../../../../../Hooks/UseSendToWhatsapp/index.tsx";
import WarningSnackbar from "../WarningSnackbar/WarningSnackbar.tsx";

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
  toggleDrawer: (open: boolean) => () => void;
}

export const ShoppingCartFooter = React.forwardRef<
  HTMLDivElement,
  ShoppingCartFooterProps
>(({ cartItems, toggleDrawer }, ref) => {
  const { sendProducts } = useSendWhatsapp("5511912297241");
  const [open, setOpen] = useState(false);

  const handleSendProducts = () => {
    if (cartItems.length === 0) {
      setOpen(true);
    }
    sendProducts(cartItems);
  };

  return (
    <>
      <Box sx={{ padding: "16px", borderTop: "1px solid #eee" }}>
        <Typography variant="body2" color="textSecondary">
          {`Total de itens:
        ${cartItems.reduce((acc, item) => acc + item.quantity, 0)}`}
        </Typography>
        <Button
          variant="outlined"
          fullWidth
          sx={getSecondShoppingCartFooterButtonStyle}
          onClick={handleSendProducts}
        >
          {"Enviar pedido"}
        </Button>
        <Button
          variant="outlined"
          fullWidth
          onClick={toggleDrawer(false)}
          sx={getFirstShoppingCartFooterButtonStyle}
        >
          {"Continuar comprando"}
        </Button>
      </Box>
      <WarningSnackbar open={open} setOpen={setOpen} />
    </>
  );
});

export default ShoppingCartFooter;
