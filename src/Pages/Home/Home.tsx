import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { IoChevronForward } from "react-icons/io5";
import {
  getContentContainerStyle,
  getContentStyle,
  getDescriptionStyle,
  getPageContainerStyle,
  getTitleStyle,
} from "./Home.styles.ts";
import { StyledButton } from "../../Components/index.ts";
import { useScrollValue } from "../../utils/getScrollValue/index.tsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const scrollValue = useScrollValue();

  return (
    <Box sx={getPageContainerStyle(scrollValue)}>
      <Box sx={getContentContainerStyle}>
        <Box sx={getContentStyle}>
          <Typography sx={getTitleStyle}>
            {"Produtos Artesanais Qualidade e Cuidado Feitos à Mão"}
          </Typography>
          <Typography sx={getDescriptionStyle}>
            {
              "Descubra nossa seleção de produtos artesanais, feitos com ingredientes naturais e atenção aos detalhes, para trazer bem-estar e um toque especial ao seu dia a dia."
            }
          </Typography>
          <StyledButton
            text="Conheça nossos produtos"
            variant="outlined"
            size="md"
            icon={<IoChevronForward />}
            onClick={() => navigate("/product-page")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
