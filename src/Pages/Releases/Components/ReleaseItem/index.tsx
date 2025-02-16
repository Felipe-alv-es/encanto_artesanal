import React from "react";
import { Box, Typography } from "@mui/material";
import {
  getGridItemStyle,
  getGridItemTitleStyle,
} from "../../Releases.styles.ts";

interface ReleaseItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const ReleaseItem = React.forwardRef<HTMLDivElement, ReleaseItemProps>(
  ({ title, imageSrc, imageAlt, description }) => {
    return (
      <Box sx={getGridItemStyle}>
        <Box component="img" src={imageSrc} alt={imageAlt} />
        <Box>
          <Typography sx={getGridItemTitleStyle}>{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
    );
  }
);

export default ReleaseItem;
