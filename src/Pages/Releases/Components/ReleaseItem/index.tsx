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
          sx={{
            display: "flex",
            height: "450px",
            width: "300px",
            overflow: "hidden",
            borderRadius: "16px",
          }}
        >
          <Box
            component="img"
            src={imageSrc}
            alt={imageAlt}
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 3px 0px",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Box>
          <Typography sx={getGridItemTitleStyle}>{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
    );
  }
);

export default ReleaseItem;
