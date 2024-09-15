import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { IoChevronForward } from "react-icons/io5";
import { getContainerStyle, getDescriptionStyle } from "./Home.styles.ts";
import { StyledButton } from "../../Components/index.ts";

const Home = () => {
  return (
    <Box sx={getContainerStyle}>
      <Box sx={{ padding: "64px", width: "25%" }}>
        <Typography variant="h3" color="#F2F2F2" fontWeight={500}>
          Produtos Artesanais Qualidade e Cuidado Feitos à Mão
        </Typography>
        <Typography sx={getDescriptionStyle}>
          {
            "Descubra nossa seleção de produtos artesanais, feitos com ingredientes naturais e atenção aos detalhes, para trazer bem-estar e um toque especial ao seu dia a dia."
          }
        </Typography>
        <StyledButton
          text="Conheça nossos produtos"
          variant="outlined"
          icon={<IoChevronForward />}
        />
      </Box>
    </Box>
  );
};

export default Home;
