import React from "react";
import Box from "@mui/material/Box";
import { IoChevronDown } from "react-icons/io5";
import { getContainerStyle, getMenuStyle } from "./Navbar.styles.tsx";
import { StyledLogo } from "../../Components/index.ts";

const navBarItems = ["Velas", "Sabonetes", "Shampoo", "Perfumes"];

const Navbar = (props) => {
  return (
    <Box sx={getContainerStyle} {...props}>
      <StyledLogo />
      <Box sx={getMenuStyle}>
        <ul>
          {navBarItems.map((item) => (
            <>
              <Box>
                <IoChevronDown />
                <li>{item}</li>
              </Box>
            </>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;
