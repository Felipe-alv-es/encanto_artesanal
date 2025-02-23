import React from "react";
import { Box, Typography } from "@mui/material";
import {
  getOverlayStyle,
  swiperItemContainerStyle,
  swiperItemDescriptionStyle,
  swiperItemTextContainerStyle,
  swiperItemTitleStyle,
} from "./StyledSwiperItem.styles.ts";
import { StyledButton } from "../../../../Components/StyledButton/StyledButton.tsx";

export default interface StyledSwiperItemProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

export const StyledSwiperItem = React.forwardRef<
  HTMLDivElement,
  StyledSwiperItemProps
>(({ title, imgSrc, imgAlt, description, ...props }, ref) => {
  return (
    <Box {...props}>
      <Box className="slide-overlay" sx={getOverlayStyle}>
        <Box sx={swiperItemContainerStyle}>
          <Box sx={swiperItemTextContainerStyle}>
            <Typography sx={swiperItemTitleStyle}>{title}</Typography>
            <Typography sx={swiperItemDescriptionStyle}>
              {description}
            </Typography>
            <StyledButton
              text="Veja mais"
              variant="outlined"
              size="md"
              padding={"8px"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        component="img"
        src={imgSrc}
        alt={imgAlt}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "32px",
          marginBottom: "16px",
        }}
      />
    </Box>
  );
});
