import React, { useState } from "react";
import Box from "@mui/material/Box";
import { IoChevronDown } from "react-icons/io5";
import { getContainerStyle, getMenuStyle } from "./Navbar.styles.tsx";
import { StyledLogo } from "../../Components/index.ts";
import { Button, Divider, IconButton } from "@mui/material";

const navBarItems = [
  { label: "Velas", options: ["Aromáticas", "Decorativas"] },
  { label: "Sabonetes", options: ["Líquido", "Barra"] },
  { label: "Shampoo", options: ["Seco", "Hidratante"] },
  { label: "Perfumes", options: ["Masculino", "Feminino"] },
];

const Navbar = (props) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleToggle = (item: string) => {
    setExpandedItem((prev) => (prev === item ? null : item));
  };

  return (
    <Box sx={getContainerStyle} {...props}>
      <StyledLogo />
      <Box sx={getMenuStyle}>
        <ul>
          {navBarItems.map((item) => (
            <li key={item.label}>
              <Box>
                <Box>
                  <IconButton onClick={() => handleToggle(item.label)}>
                    <IoChevronDown />
                    {item.label}
                  </IconButton>
                </Box>
                {expandedItem === item.label && (
                  <Box sx={{ paddingLeft: "16px" }}>
                    {item.options.map((option) => (
                      <>
                        <Button key={option}>{option}</Button>
                        <Divider />
                      </>
                    ))}
                  </Box>
                )}
              </Box>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;
