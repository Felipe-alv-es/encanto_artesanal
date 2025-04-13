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
import InvisiblePlaceHolder from "./Components/InvisiblePlaceHolder/InvisiblePlaceHolder.tsx";

const Navbar = (props) => {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
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

  return (
    <Box sx={getContainerStyle(showHeader)} {...props}>
      <Box sx={getContentContainerStyle()}>
        {isMobile && (
          <IconButton onClick={toggleDrawer(true)}>
            <IoMenu size={32} />
          </IconButton>
        )}
        <StyledLogo onClick={() => navigate("/")} />
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
                <Button onClick={() => navigate(item.path)}>
                  {item.label}
                </Button>
              </Box>
            ))}
          </Box>
        )}
        {isMobile && <InvisiblePlaceHolder />}
      </Box>
    </Box>
  );
};

export default Navbar;
