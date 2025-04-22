import { Box, Typography } from "@mui/material";
import React from "react";

interface ShopCartItemContentProps {
  name: string;
  price: string;
  quantity: number;
}

export const CartItemContent = React.forwardRef<
  HTMLDivElement,
  ShopCartItemContentProps
>(({ name, price, quantity }, ref) => {
  return (
    <Box>
      <Typography fontWeight="bold">{name}</Typography>
      <Typography variant="body2">{price}</Typography>
      <Typography variant="body2">{`Quantidade: ${quantity}`}</Typography>
    </Box>
  );
});

export default CartItemContent;
