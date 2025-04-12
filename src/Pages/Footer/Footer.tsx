import React from "react";
import { Box } from "@mui/material";
import { getContainerStyles } from "./Footer.styles.ts";
import FooterListComponent from "./Components/FooterListComponent/FooterListComponent.tsx";

const Footer = () => {
  return (
    <Box sx={getContainerStyles} id="Contato">
      <Box>
        <FooterListComponent />
      </Box>
    </Box>
  );
};

export default Footer;
