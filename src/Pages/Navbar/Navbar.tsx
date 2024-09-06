import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

const Navbar = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "16px 5% 16px 5%",
        width: "100%",
        position: "absolute",
        zIndex: 1,
        transition: "1s",
        "> div > ul": {
          display: "flex",
          listStyle: "none",
          color: "#1F1F1F",
          gap: "32px",
          "> div": {
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "> li": {
              padding: "8px",
              fontFamily: "Oranienbaum",
              fontSize: "20px",
              "::after": {
                content: '""',
                width: "0px",
                height: "1px",
                display: "block",
                background: "black",
                transition: "300ms",
              },
              ":hover::after": {
                width: "100%",
              },
            },
          },
        },
      }}
      {...props}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "10%",
          marginRight: "64px",
          cursor: "pointer",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Oranienbaum",
          }}
        >
          Encanto
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Oranienbaum",
            textAlign: "right",
          }}
        >
          Artesanal
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <ul>
          <Box>
            <li>Velas</li>
            <IoChevronDown />
          </Box>
          <Box>
            <li>Sabonetes</li>
            <IoChevronDown />
          </Box>
          <Box>
            <li>Shampoo</li>
            <IoChevronDown />
          </Box>
          <Box>
            <li>Perfumes</li>
            <IoChevronDown />
          </Box>
        </ul>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <CiSearch color="black" size={24} />
          <Typography
            sx={{
              fontFamily: "Oranienbaum",
              fontSize: "20px",
              cursor: "pointer",
              "::after": {
                content: '""',
                width: "0px",
                height: "1px",
                display: "block",
                background: "black",
                transition: "300ms",
              },
              ":hover::after": {
                width: "100%",
              },
            }}
          >
            Pesquisar
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
