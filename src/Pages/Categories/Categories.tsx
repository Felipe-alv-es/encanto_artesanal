import React from "react";
import { Box, Typography } from "@mui/material";
import { categoriesOptions } from "../../assets/Arrays/CategoriesList.tsx";
import { StyledButton } from "../../Components/index.ts";
import {
  getContainerStyle,
  getItemContainer,
  getDescriptionStyle,
} from "./Categories.styles.ts";

const Categories = () => {
  return (
    <Box sx={getContainerStyle}>
      {categoriesOptions.map((item) => (
        <Box sx={getItemContainer}>
          <Box
            component="img"
            src={item.imageSrc}
            alt={item.imageAlt}
            sx={{
              width: "100%",
              borderRadius: "16px",
              marginBottom: "16px",
            }}
          />
          <Box sx={getDescriptionStyle}>
            <Typography
              variant="h5"
              fontWeight={"500"}
              sx={{ marginBottom: "8px" }}
            >
              {item.title}
            </Typography>
            <Typography variant="body1" fontWeight={"300"}>
              {item.descrição}
            </Typography>
            <StyledButton
              text="Veja mais"
              variant="outlined"
              isWhiteBg
              size="md"
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
