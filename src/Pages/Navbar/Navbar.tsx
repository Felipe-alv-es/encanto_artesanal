import React from "react";
import Box from "@mui/material/Box";
import { IoChevronDown } from "react-icons/io5";
import {
  getContainerStyle,
  getMenuStyle,
  StyledSearch,
} from "./Navbar.styles.tsx";
import { StyledLogo } from "../../Components/index.ts";
import { FaSearch } from "react-icons/fa";

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
      <StyledSearch
        text="Pesquisar"
        icon={<FaSearch color="F2F2F2" size={24} />}
      />
    </Box>
  );
};

export default Navbar;
