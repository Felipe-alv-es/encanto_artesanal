import { Box, Typography } from "@mui/material";
import React from "react";
import {
  getFirstTitleStyle,
  getLogoContainerStyle,
  getSecondTitleStyle,
} from "./StyledLogo.styles.ts";

interface StyledLogoProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const StyledLogo = React.forwardRef<HTMLDivElement, StyledLogoProps>(
  ({ onClick, ...props }, ref) => {
    return (
      <Box
        sx={getLogoContainerStyle}
        role="button"
        component={"button"}
        onClick={onClick}
        {...props}
      >
        <Typography sx={getFirstTitleStyle}>{"Encanto"}</Typography>
        <Typography sx={getSecondTitleStyle}>{"Artesanal"}</Typography>
      </Box>
    );
  }
);

export default StyledLogo;
