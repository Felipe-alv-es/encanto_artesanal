import { Box, Paper, Skeleton, Typography } from "@mui/material";
import React from "react";
import GaleryImageComponent from "../GaleryImageComponent/GaleryImageComponent.tsx";
import { GaleryTitleStyle, getItemContainer } from "./GaleryItem.styles.ts";
import { useNavigate } from "react-router-dom";
import GaleryItemSkeleton from "../GaleryItemSkeleton/GaleryItemSkeleton.tsx";

interface GaleryItemProps {
  title: string;
  imageAlt: string;
  imageSrc: string;
  isLoading?: boolean;
}

export const GaleryItem = React.forwardRef<HTMLDivElement, GaleryItemProps>(
  ({ title, imageAlt, imageSrc, isLoading }, ref) => {
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
          <Box sx={GaleryTitleStyle}>
            <Skeleton variant="rounded" height={"30%"} width={"60%"} />
          </Box>
        ) : (
          <Box sx={GaleryTitleStyle}>
            <Typography>{title}</Typography>
          </Box>
        )}
      </Paper>
    );
  }
);

export default GaleryItem;
