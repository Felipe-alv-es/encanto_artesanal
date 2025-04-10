import { Box, Paper, Skeleton, Typography } from "@mui/material";
import React from "react";
import GaleryImageComponent from "../GaleryImageComponent/GaleryImageComponent.tsx";
import {
  GaleryPriceStyle,
  GaleryTitleStyle,
  getItemContainer,
} from "./GaleryItem.styles.ts";
import { useNavigate } from "react-router-dom";
import GaleryItemSkeleton from "../GaleryItemSkeleton/GaleryItemSkeleton.tsx";

interface GaleryItemProps {
  title: string;
  price: string;
  imageAlt: string;
  imageSrc: string;
  isLoading?: boolean;
  isPrincipal?: boolean;
}

export const GaleryItem = React.forwardRef<HTMLDivElement, GaleryItemProps>(
  ({ title, price, imageAlt, imageSrc, isLoading, isPrincipal }, ref) => {
    const navigate = useNavigate();

    return (
      <Paper
        sx={getItemContainer()}
        key={title}
        role="button"
        elevation={0}
        onClick={() => navigate("/product-page")}
      >
        {isLoading ? (
          <GaleryItemSkeleton />
        ) : (
          <GaleryImageComponent imageAlt={imageAlt} imageSrc={imageSrc} />
        )}
        {isLoading ? (
          <Box sx={GaleryTitleStyle(isPrincipal)}>
            <Skeleton variant="rounded" height={"30%"} width={"60%"} />
          </Box>
        ) : (
          <Box sx={GaleryTitleStyle(isPrincipal)}>
            <Typography>{title}</Typography>
          </Box>
        )}
        {price && (
          <Box sx={GaleryPriceStyle(isPrincipal)}>
            <Typography>{price}</Typography>
          </Box>
        )}
      </Paper>
    );
  }
);

export default GaleryItem;
