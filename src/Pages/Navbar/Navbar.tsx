import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  getContainerStyle,
  getContentContainerStyle,
  getListItemStyle,
  getListStyle,
} from "./Navbar.styles.tsx";
import { StyledLogo } from "../../Components/index.ts";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const navBarItems = [
  {
    label: "Velas Moldadas",
    path: "/product-page/velas-moldadas",
  },
  {
    label: "Velas de Massagem",
    path: "/product-page/velas-de-massagem",
  },
  {
    label: "Velas Container",
    path: "/product-page/velas-container",
  },
  {
    label: "Sabonetes Decorativos",
    path: "/product-page/sabonetes-decorativos",
  },
  {
    label: "Geleias de Banho",
    path: "/product-page/geleias-de-banho",
  },
  {
    label: "Joias de Resina",
    path: "/product-page/joias-de-resina",
  },
];

const Navbar = (props) => {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Box sx={getContainerStyle(showHeader)} {...props}>
      <Box sx={getContentContainerStyle()}>
        <StyledLogo onClick={() => navigate("/")} />
        <Box sx={getListStyle} role="list">
          {navBarItems.map((item) => (
            <Box sx={getListItemStyle} role="listitem" key={item.label}>
              <IconButton onClick={() => navigate(item.path)}>
                {item.label}
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
