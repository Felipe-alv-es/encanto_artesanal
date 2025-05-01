import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { categoriesOptions } from "../../assets/Arrays/CategoriesList.tsx";
import {
  getContainerStyle,
  getContentContainerStyle,
  getTitleStyle,
} from "./Categories.styles.ts";
import CategoryItem from "./Components/CategoryItem/CategoryItem.tsx";
import CategoriesMobileCarousel from "./Components/CategoriesMobileCarousel/CategoriesMobileCarousel.tsx";

const Categories = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={getContainerStyle}>
      <Box>
        <Box>
          <Typography sx={getTitleStyle}>
            {"Os melhores produtos artesanais para você"}
          </Typography>
          <Box sx={getContentContainerStyle}>
            {isMobile ? (
              <CategoriesMobileCarousel categoriesOptions={categoriesOptions} />
            ) : (
              <Box display="flex" flexWrap="wrap" gap={2}>
                {categoriesOptions.map((item) => (
                  <CategoryItem
                    key={item.title}
                    title={item.title}
                    imageSrc={item.imageSrc}
                    imageAlt={item.imageAlt}
                    onClick={() => handleNavigate("/product-page")}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
