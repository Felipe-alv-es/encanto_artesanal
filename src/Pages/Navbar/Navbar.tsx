import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  getContainerStyle,
  getContentContainerStyle,
  getListItemStyle,
  getListStyle,
} from "./Navbar.styles.tsx";
import { StyledLogo } from "../../Components/index.ts";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navBarItems } from "../../assets/Arrays/NavbarList.tsx";
import { IoMenu } from "react-icons/io5";
import SideDrawer from "./Components/SideDrawer/SideDrawer.tsx";
import ShopCartIcon from "./Components/ShopCartIcon/ShopCartIcon.tsx";
import { useCart } from "../../Context/ShoppingCartContext/CartContext.tsx";
import ShoppingCartSideDrawer from "./Components/ShoppingCartSideDrawer/ShoppingCartSideDrawer.tsx";
import { useNavigation } from "../../Context/NavigationContext/NavigationContext.tsx";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { setCurrentPageNumber } = useNavigation();
  const { cart } = useCart();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const toggleCart = (open: boolean) => () => {
    setCartDrawerOpen(open);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setCurrentPageNumber(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={getContainerStyle(showHeader)} {...props}>
      <Box sx={getContentContainerStyle()}>
        {isMobile && (
          <IconButton onClick={toggleDrawer(true)}>
            <IoMenu size={32} />
          </IconButton>
        )}
        <StyledLogo onClick={() => handleNavigate("/")} />
        {isMobile ? (
          <SideDrawer
            drawerOpen={drawerOpen}
            toggleDrawer={toggleDrawer}
            navBarItems={navBarItems}
          />
        ) : (
          <Box sx={getListStyle} role="list">
            {navBarItems.map((item) => (
              <Box sx={getListItemStyle} role="listitem" key={item.label}>
                <Button onClick={() => handleNavigate(item.path)}>
                  {item.label}
                </Button>
              </Box>
            ))}
          </Box>
        )}
        <ShopCartIcon
          carItemsCount={cart.length}
          onClick={toggleCart(!cartDrawerOpen)}
          setShowHeader={setShowHeader}
        />
        <ShoppingCartSideDrawer
          cartItems={cart}
          drawerOpen={cartDrawerOpen}
          toggleDrawer={toggleCart}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
