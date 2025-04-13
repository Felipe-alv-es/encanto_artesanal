import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import {
  getProductItemContainerStyle,
  getProductItemPriceStyle,
  getProductItemTitleStyle,
} from "./ProductItem.styles.ts";
import { useNavigate } from "react-router-dom";
import ProductItemImage from "../ProductItemImage/ProductItemImage.tsx";

interface ProductItemProps {
  title: string;
  price?: string;
  imageSrc: string;
  onClick?: () => void;
}

export const ProductItem = React.forwardRef<HTMLLIElement, ProductItemProps>(
  ({ title, price, imageSrc, onClick }, ref) => {
    const navigate = useNavigate();

    return (
      <Box ref={ref}>
        <Paper
          sx={getProductItemContainerStyle}
          key={title}
          role="button"
          elevation={0}
          onClick={() => navigate("/product-page")}
        >
          <ProductItemImage imageAlt={title} imageSrc={imageSrc} />
          <Box sx={getProductItemTitleStyle}>
            <Typography>{title}</Typography>
          </Box>
          {price && (
            <Box sx={getProductItemPriceStyle}>
              <Typography>{price}</Typography>
            </Box>
          )}
        </Paper>
      </Box>
    );
  }
);

export default ProductItem;
