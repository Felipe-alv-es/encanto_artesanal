import React from "react";
import { Box } from "@mui/material";

interface GaleryImageComponentProps {
  imageSrc: string;
  imageAlt: string;
}

export const GaleryImageComponent = React.forwardRef<
  HTMLDivElement,
  GaleryImageComponentProps
>(({ imageSrc, imageAlt }, ref) => {
  return (
    <Box
      component="img"
      src={imageSrc}
      alt={imageAlt}
      sx={{
        width: "100%",
        objectFit: "cover",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        transition: "transform 0.5s ease-out",
        display: "block",
        "@media(max-width: 2560px)": {
          height: "80%",
        },
        "@media(max-width: 768px)": {
          height: "75%",
        },
      }}
    />
  );
});

export default GaleryImageComponent;
