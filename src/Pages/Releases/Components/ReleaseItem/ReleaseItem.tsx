import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import ReleaseItemImageComponent from "../ReleaseItemImageComponent/ReleaseItemImageComponent.tsx";
import { useNavigate } from "react-router-dom";
import {
  getReleaseItemStyle,
  getReleaseItemTitleStyle,
  getTitlePriceContainer,
  ReleaseItemPriceStyle,
} from "./ReleaseItem.styles.ts";

interface ReleaseItemProps {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  producttype?: string;
  price?: string;
}

export const ReleaseItem = React.forwardRef<HTMLDivElement, ReleaseItemProps>(
  ({ id, title, imageSrc, imageAlt, price, producttype }, ref) => {
    const navigate = useNavigate();

    const handleOnClickItem = (id: number) => {
      navigate(`/produto/${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <Paper
        sx={getReleaseItemStyle}
        key={title}
        role="button"
        elevation={0}
        onClick={() => handleOnClickItem(id)}
      >
        <ReleaseItemImageComponent imageAlt={imageAlt} imageSrc={imageSrc} />
        <Box sx={getTitlePriceContainer}>
          <Box sx={getReleaseItemTitleStyle}>
            <Typography>{title}</Typography>
          </Box>
          {price && (
            <Box sx={ReleaseItemPriceStyle}>
              <Typography>{price}</Typography>
            </Box>
          )}
        </Box>
      </Paper>
    );
  }
);

export default ReleaseItem;
