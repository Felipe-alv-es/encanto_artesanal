import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import ReleaseItemImageComponent from "../ReleaseItemImageComponent/ReleaseItemImageComponent.tsx";
import { useNavigate } from "react-router-dom";
import { toUrlFormat } from "../../../../utils/toUrlFormat/index.tsx";
import {
  getReleaseItemStyle,
  getReleaseItemTitleStyle,
  getTitlePriceContainer,
  ReleaseItemPriceStyle,
} from "./ReleaseItem.styles.ts";

interface ReleaseItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  producttype?: string;
  price?: string;
}

export const ReleaseItem = React.forwardRef<HTMLDivElement, ReleaseItemProps>(
  ({ title, imageSrc, imageAlt, price, producttype }, ref) => {
    const navigate = useNavigate();

    return (
      <Paper
        sx={getReleaseItemStyle}
        key={title}
        role="button"
        elevation={0}
        onClick={() => navigate(`/product-page/${toUrlFormat(producttype)}`)}
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
