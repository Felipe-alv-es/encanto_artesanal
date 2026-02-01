import { Box, Typography } from "@mui/material";
import React from "react";
import CategoryItem from "../../../Categories/Components/CategoryItem/CategoryItem.tsx";

interface RelatableItemsProps {
  handleOnClickRelatableItem: (id: number) => void;
  firstFourCategories: {
    id: number;
    title: string;
    imageSrc: string;
    imageAlt: string;
  }[];
}

export const RelatableItems = React.forwardRef<
  HTMLDivElement,
  RelatableItemsProps
>(({ handleOnClickRelatableItem, firstFourCategories }, ref) => {
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
        {firstFourCategories.map((item) => (
          <CategoryItem
            key={item.title}
            title={item.title}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            onClick={() => handleOnClickRelatableItem(item.id)}
            withoutArrow
          />
        ))}
      </Box>
    </Box>
  );
});

export default RelatableItems;
