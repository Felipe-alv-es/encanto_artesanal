import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import GaleryImageComponent from "../GaleryImageComponent/GaleryImageComponent.tsx";
import { GaleryTitleStyle, getItemContainer } from "./GaleryItem.styles.ts";
import { useNavigate } from "react-router-dom";

interface GaleryItemProps {
  title: string;
  imageAlt: string;
  imageSrc: string;
  isPrincipal?: boolean;
}

export const GaleryItem = React.forwardRef<HTMLDivElement, GaleryItemProps>(
  ({ title, imageAlt, imageSrc, isPrincipal }, ref) => {
    const navigate = useNavigate();

    return (
      <Paper
        sx={getItemContainer(isPrincipal)}
        key={title}
        role="button"
        elevation={0}
        onClick={() => navigate("/product-page")}
      >
        <GaleryImageComponent imageAlt={imageAlt} imageSrc={imageSrc} />
        <Box sx={GaleryTitleStyle}>
          <Typography>{title}</Typography>
        </Box>
      </Paper>
    );
  }
);

export default GaleryItem;
