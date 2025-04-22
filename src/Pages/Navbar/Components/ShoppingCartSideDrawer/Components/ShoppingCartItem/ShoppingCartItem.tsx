import React from "react";
import { Box } from "@mui/material";
import CartItemContent from "../CartItemContent/CartItemContent.tsx";
import CloseButton from "../CloseButton/CloseButton.tsx";
import { getCartSideDrawerItemStyle } from "./ShoppingCartItem.styles.ts";
import { useCart } from "../../../../../../Context/ShoppingCartContext/CartContext.tsx";

interface ShoppingCartItemProps {
  id: number;
  name: string;
  price: string;
  imgSrc: string[];
  imgAlt: string;
  quantity: number;
}

export const ShoppingCartItem = React.forwardRef<
  HTMLDivElement,
  ShoppingCartItemProps
>(({ id, name, price, imgSrc, imgAlt, quantity }, ref) => {
  const { removeFromCart } = useCart();

  return (
    <Box key={id} sx={getCartSideDrawerItemStyle}>
      <Box component="img" src={imgSrc[0]} alt={imgAlt} />
      <CartItemContent name={name} price={price} quantity={quantity} />
      <CloseButton onClick={() => removeFromCart(id)} />
    </Box>
  );
});

export default ShoppingCartItem;
