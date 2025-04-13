import React from "react";
import { Box, Typography } from "@mui/material";
import {
  getProductPageSubtitleStyle,
  getProductPageTitleContainerStyle,
  getProductPageTitleStyle,
} from "./ProductPageTitle.style.ts";

interface ProductPageTitleProps {
  title: string;
  subtitle: string;
}

export const ProductPageTitle = React.forwardRef<
  HTMLLIElement,
  ProductPageTitleProps
>(({ title, subtitle }, ref) => {
  return (
    <Box sx={getProductPageTitleContainerStyle}>
      <Box>
        <Typography sx={getProductPageTitleStyle}>{title}</Typography>
        <Typography sx={getProductPageSubtitleStyle}>{subtitle}</Typography>
      </Box>
    </Box>
  );
});

export default ProductPageTitle;
