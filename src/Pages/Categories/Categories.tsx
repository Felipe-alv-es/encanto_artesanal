import React from "react";
import { Box, Typography } from "@mui/material";
import { categoriesOptions } from "../../assets/Arrays/CategoriesList.tsx";
import { StyledButton } from "../../Components/index.ts";
import {
  getContainerStyle,
  getItemContainer,
  getDescriptionStyle,
  CategoriesTitleStyle,
  CategoriesDescriptionStyle,
} from "./Categories.styles.ts";
import CategoriesImageComponent from "./Components/CategoriesImageComponent/index.tsx";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <Box sx={getContainerStyle}>
      {categoriesOptions.map((item) => (
        <Box sx={getItemContainer}>
          <Box sx={getDescriptionStyle}>
            <CategoriesImageComponent
              imageAlt={item.imageAlt}
              imageSrc={item.imageSrc}
            />
            <Typography sx={CategoriesTitleStyle}>{item.title}</Typography>
            <Typography sx={CategoriesDescriptionStyle}>
              {item.descrição}
            </Typography>
            <StyledButton
              text="Veja mais"
              variant="outlined"
              isWhiteBg
              size="md"
              onClick={() => navigate("/product-page")}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
