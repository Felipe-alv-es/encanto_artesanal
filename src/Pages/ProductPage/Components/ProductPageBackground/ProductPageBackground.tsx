import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { productPageBackgroundList } from "../../../../assets/Arrays/ProductPageBackground.tsx";
import { productPageBackgroundStyle } from "./ProductPageBackground.styles.ts";
import useGradientByType from "../../../../Hooks/GradientSelector/index.tsx";

interface ProductItemProps {
  children?: React.ReactNode;
  selectedtype: string | null;
}

export const ProductPageBackground = React.forwardRef<
  HTMLLIElement,
  ProductItemProps
>(({ children, selectedtype }, ref) => {
  if (selectedtype == null) {
    selectedtype = "all";
  }

  const gradientColor = useGradientByType(selectedtype);
  const [delayedGradient, setDelayedGradient] = useState<string>(gradientColor);
  const [delayedType, setDelayedType] = useState<string>(gradientColor);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedGradient(gradientColor);
      setDelayedType(selectedtype);
    }, 1000);

    return () => clearTimeout(timer);
  }, [gradientColor, selectedtype]);

  return (
    <Box sx={productPageBackgroundStyle(delayedGradient)} ref={ref}>
      {productPageBackgroundList[delayedType]?.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: item.top,
            right: item.right,
            zIndex: 0,
          }}
        >
          <Box
            component="img"
            src={item.imageSrc}
            style={{ transform: `rotate(${item.rotate}deg)`, height: "250px" }}
          />
        </Box>
      ))}

      {children}
    </Box>
  );
});

export default ProductPageBackground;
