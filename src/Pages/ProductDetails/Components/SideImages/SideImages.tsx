import { Box } from "@mui/material";
import React from "react";
import { getSideImagesStyle } from "./SideImages.styles.ts";

interface SideImagesProps {
  product: {
    id: number;
    title: string;
    description: string;
    largedescription: string;
    imagesrc: string[];
    imagealt: string;
    producttype: string;
  };
  setSelectedImage: (value: React.SetStateAction<string>) => void;
}

export const SideImages = React.forwardRef<HTMLDivElement, SideImagesProps>(
  ({ product, setSelectedImage }, ref) => {
    return (
      <Box sx={getSideImagesStyle}>
        {product.imagesrc.map((img, i) => (
          <img key={i} src={img} alt="" onClick={() => setSelectedImage(img)} />
        ))}
      </Box>
    );
  }
);

export default SideImages;
