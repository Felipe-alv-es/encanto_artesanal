import React from "react";
import { Box } from "@mui/material";

interface CategoriesImageComponentProps {
  imageSrc: string;
  imageAlt: string;
}

export const CategoriesImageComponent = React.forwardRef<
  HTMLDivElement,
  CategoriesImageComponentProps
>(({ imageSrc, imageAlt }, ref) => {
  return (
    <Box
      component="img"
      src={imageSrc}
      alt={imageAlt}
      sx={{
        width: "100%",
        borderRadius: "16px",
        marginBottom: "16px",
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 1px 10px 0px",
      }}
    />
  );
});

export default CategoriesImageComponent;
