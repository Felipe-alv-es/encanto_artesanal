import React from "react";
import { Box, Drawer, Typography } from "@mui/material";
import {
  getCartSideDrawerContainerStyle,
  getCartSideDrawerTitleStyle,
} from "./ShoppingCartSideDrawer.styles.ts";
import ShoppingCartFooter from "./Components/ShoppingCartFooter/ShoppingCartFooter.tsx";
import ShoppingCartItem from "./Components/ShoppingCartItem/ShoppingCartItem.tsx";

interface CartItem {
  id: number;
  name: string;
  price: string;
  imgSrc: string[];
  imgAlt: string;
  quantity: number;
}

interface SideDrawerProps {
  drawerOpen: boolean;
  toggleDrawer: (open: boolean) => () => void;
  cartItems: CartItem[];
}

export const ShoppingCartSideDrawer = React.forwardRef<
  HTMLDivElement,
  SideDrawerProps
>(({ drawerOpen, toggleDrawer, cartItems }, ref) => {
  return (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box sx={getCartSideDrawerContainerStyle} ref={ref}>
        <Typography sx={getCartSideDrawerTitleStyle}>
          {"Seu carrinho"}
        </Typography>
        <Box sx={{ overflowY: "auto", flexGrow: 1 }}>
          {cartItems.length === 0 ? (
            <Typography>Nenhum item no carrinho.</Typography>
          ) : (
            cartItems.map((item) => (
              <ShoppingCartItem
                id={item.id}
                name={item.name}
                price={item.price}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                quantity={item.quantity}
              />
            ))
          )}
        </Box>
        <ShoppingCartFooter cartItems={cartItems} />
      </Box>
    </Drawer>
  );
});

export default ShoppingCartSideDrawer;
