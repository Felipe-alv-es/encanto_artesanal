import { Box } from "@mui/material";
import React from "react";
import { getMainImageStyle } from "./MainImage.styles.ts";

interface MainImageProps {
  selectedImage: string;
  product: {
    id: number;
    title: string;
    description: string;
    largedescription: string;
    imagesrc: string[];
    imagealt: string;
    producttype: string;
  };
}

const MainImage = React.forwardRef<HTMLDivElement, MainImageProps>(
  ({ selectedImage, product }, ref) => {
    return (
      <Box sx={getMainImageStyle}>
        <img src={selectedImage} alt={product.title} />
      </Box>
    );
  }
);

export default MainImage;
