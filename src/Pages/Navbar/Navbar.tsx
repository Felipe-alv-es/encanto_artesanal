import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { IoChevronDown } from "react-icons/io5";
import { getContainerStyle, getMenuStyle } from "./Navbar.styles.tsx";
import { StyledLogo } from "../../Components/index.ts";
import { Button, Divider, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const navBarItems = [
  {
    label: "Velas",
    options: [
      { title: "Velas Moldadas", path: "/product-page/velas-moldadas" },
      { title: "Velas de Massagem", path: "/product-page/velas-de-massagem" },
      { title: "Velas Container", path: "/product-page/velas-container" },
    ],
  },
  {
    label: "Sabonetes",
    options: [
      {
        title: "Sabonetes Decorativos",
        path: "/product-page/sabonetes-decorativos",
      },
      { title: "Geleias de Banho", path: "/product-page/geleias-de-banho" },
    ],
  },
  {
    label: "Resina",
    options: [
      { title: "Joias de Resina", path: "/product-page/joias-de-resina" },
    ],
  },
];

const Navbar = (props) => {
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggle = (item: string) => {
    setExpandedItem((prev) => (prev === item ? null : item));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setExpandedItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box ref={navRef} sx={getContainerStyle} {...props}>
      <StyledLogo onClick={() => navigate("/")} />
      <Box sx={getMenuStyle}>
        <ul>
          {navBarItems.map((item) => (
            <li key={item.label}>
              <Box>
                <Box>
                  <IconButton
                    onClick={() => handleToggle(item.label)}
                    sx={{
                      borderRadius: "8px",
                      ":hover": {
                        background: "transparent",
                      },
                    }}
                  >
                    <IoChevronDown />
                    {item.label}
                  </IconButton>
                </Box>
                {expandedItem === item.label && (
                  <Box sx={{ paddingLeft: "16px" }}>
                    {item.options.map((option) => (
                      <>
                        <Button
                          key={option.title}
                          onClick={() => navigate(option.path)}
                        >
                          {option.title}
                        </Button>
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
