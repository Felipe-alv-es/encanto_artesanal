import React from "react";
import { Box, Typography } from "@mui/material";
import { getContainerStyles } from "./Footer.styles.ts";
import FooterListComponent from "./Components/FooterListComponent/FooterListComponent.tsx";

const Footer = () => {
  return (
    <>
      <Box sx={getContainerStyles} id="Contato">
        <Box>
          <FooterListComponent />
        </Box>
      </Box>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography fontSize={12} fontStyle={"italic"}>
          Copyright © Encanto Artesanal. Todos os direitos reservados. Todas as
          marcas e suas imagens são de propriedade de seus respectivos donos. É
          vedada a reprodução, total ou parcial, de qualquer conteúdo sem
          expressa autorização.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
