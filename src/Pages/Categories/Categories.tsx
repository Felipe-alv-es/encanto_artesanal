import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { categoriesOptions } from "../../assets/Arrays/CategoriesList.tsx";
import {
  getContainerStyle,
  getItemContainer,
  CategoriesTitleStyle,
  getContentContainerStyle,
} from "./Categories.styles.ts";
import CategoriesImageComponent from "./Components/CategoriesImageComponent/index.tsx";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <Box sx={getContainerStyle}>
      <Box sx={getContentContainerStyle}>
        {categoriesOptions.map((item) => (
          <Paper
            sx={getItemContainer}
            key={item.title}
            role="button"
            elevation={0}
            onClick={() => navigate("/product-page")}
          >
            <CategoriesImageComponent
              imageAlt={item.imageAlt}
              imageSrc={item.imageSrc}
            />
            <Box sx={CategoriesTitleStyle}>
              <Typography>{item.title}</Typography>
              <GoArrowRight size={20} />
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
