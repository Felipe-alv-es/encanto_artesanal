import React from "react";
import { Box } from "@mui/material";
import { productPageBackgroundStyle } from "../../ProductPage.styles.ts";
import { productPageBackgroundList } from "../../../../assets/Arrays/ProductPageBackground.tsx";

interface ProductItemProps {
  children?: React.ReactNode;
  selectedtype: string | null;
}

export const ProductPageBackground = React.forwardRef<
  HTMLLIElement,
  ProductItemProps
>(({ children, selectedtype }) => {
  if (selectedtype == null) {
    selectedtype = "all";
  }

  return (
    <Box sx={productPageBackgroundStyle}>
      {productPageBackgroundList[selectedtype]?.map((item, index) => (
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
