import { Box, Typography } from "@mui/material";
import React from "react";
import CategoryItem from "../../../Categories/Components/CategoryItem/CategoryItem.tsx";

type ApiResponse = {
  data: {
    id: number;
    title: string;
    description: string;
    largedescription: string;
    imagesrc: string[];
    imagealt: string;
    producttype: string;
  }[];
};

interface RelatableItemsProps {
  apiData: ApiResponse | undefined;
  handleOnClickRelatableItem: (id: number) => void;
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

export const RelatableItems = React.forwardRef<
  HTMLDivElement,
  RelatableItemsProps
>(({ apiData, handleOnClickRelatableItem, product }, ref) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "32px",
        paddingBottom: "64px",
        background: "#EAF1EA",
      }}
    >
      <Typography
        sx={{
          fontSize: "48px",
          fontWeight: "300",
          fontFamily: "kanit",
          paddingBottom: "16px",
        }}
      >
        {"Veja também"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
        }}
      >
        {apiData?.data
          ?.filter((item) => item.producttype === product.producttype)
          .slice(0, 4)
          .map((item) => (
            <CategoryItem
              key={item.title}
              title={item.title}
              imageSrc={item.imagesrc[0]}
              imageAlt={item.imagealt}
              onClick={() => handleOnClickRelatableItem(item.id)}
              withoutArrow
            />
          ))}
      </Box>
    </Box>
  );
});

export default RelatableItems;
