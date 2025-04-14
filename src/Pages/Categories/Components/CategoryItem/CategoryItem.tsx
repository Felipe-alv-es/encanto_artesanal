import React from "react";
import { Paper, Box, Typography } from "@mui/material";
import { GoArrowRight } from "react-icons/go";
import CategoriesImageComponent from "../CategoriesImageComponent/index.tsx";
import {
  CategoriesTitleStyle,
  getItemContainer,
} from "./CategoryItem.styles.ts";

interface CategoryItemProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const CategoryItem = React.forwardRef<HTMLDivElement, CategoryItemProps>(
  ({ title, imageSrc, imageAlt, onClick }, ref) => {
    return (
      <Paper
        sx={getItemContainer}
        key={title}
        role="button"
        elevation={0}
        onClick={onClick}
      >
        <CategoriesImageComponent imageAlt={imageAlt} imageSrc={imageSrc} />
        <Box sx={CategoriesTitleStyle}>
          <Typography>{title}</Typography>
          <GoArrowRight size={20} />
        </Box>
      </Paper>
    );
  }
);

export default CategoryItem;
