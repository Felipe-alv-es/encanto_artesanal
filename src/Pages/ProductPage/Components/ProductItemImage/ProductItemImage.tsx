import React from "react";
import { Box } from "@mui/material";

interface ProductItemImageProps {
  imageSrc: string;
  imageAlt: string;
}

export const ProductItemImage = React.forwardRef<
  HTMLDivElement,
  ProductItemImageProps
>(({ imageSrc, imageAlt }, ref) => {
  return (
    <Box
      component="img"
      src={imageSrc}
      alt={imageAlt}
      style={{
        width: "100%",
        height: "80%",
        objectFit: "cover",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        transition: "transform 0.5s ease-out",
        display: "block",
      }}
    />
  );
});

export default ProductItemImage;
