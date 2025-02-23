import React from "react";
import { Box } from "@mui/material";
import { getContainerStyles } from "./Footer.styles.ts";
import LogoComponent from "./Components/Logo/index.tsx";
import FooterListComponent from "./Components/FooterListComponent/index.tsx";

const Footer = () => {
  return (
    <Box sx={getContainerStyles} id="Contato">
      <Box
        sx={{
          display: "flex",
          gap: "64px",
        }}
      >
        <LogoComponent />
        <FooterListComponent />
      </Box>
    </Box>
  );
};

export default Footer;
