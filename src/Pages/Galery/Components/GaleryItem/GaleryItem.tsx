import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import GaleryImageComponent from "../GaleryImageComponent/GaleryImageComponent.tsx";
import { GaleryTitleStyle, getItemContainer } from "./GaleryItem.styles.ts";
import { useNavigate } from "react-router-dom";
import { toUrlFormat } from "../../../../utils/toUrlFormat/index.tsx";
import { GoArrowRight } from "react-icons/go";

interface GaleryItemProps {
  title: string;
  imageAlt: string;
  imageSrc: string;
  isPrincipal?: boolean;
  producttype: string;
}

export const GaleryItem = React.forwardRef<HTMLDivElement, GaleryItemProps>(
  ({ title, imageAlt, imageSrc, isPrincipal, producttype }, ref) => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const handleOnClick = (producttype: string) => {
      navigate(`/product-page/${toUrlFormat(producttype)}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <Paper
        sx={getItemContainer()}
        key={title}
        role="button"
        elevation={0}
        onClick={() => handleOnClick(producttype)}
      >
        <GaleryImageComponent imageAlt={imageAlt} imageSrc={imageSrc} />
        <Box sx={GaleryTitleStyle(isPrincipal)}>
          <Typography>{title}</Typography>
          {!isMobile && <GoArrowRight size={20} />}
        </Box>
      </Paper>
    );
  }
);

export default GaleryItem;
