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
  ({ title, imageSrc, imageAlt, description }, ref) => {
    return (
      <Box sx={getGridItemStyle}>
        <Box
          component="img"
          src={imageSrc}
          alt={imageAlt}
          sx={{ boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 3px 0px" }}
        />
        <Box>
          <Typography sx={getGridItemTitleStyle}>{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
    );
  }
);

export default ReleaseItem;
