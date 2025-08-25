import { Box } from "@mui/material";
import React from "react";
import { getLogoContainerStyle } from "./StyledLogo.styles.ts";
//@ts-ignore
import Logo from "../../assets/images/Logo/Logo2.png";

interface StyledLogoProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

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
        <Box
          sx={{
            "@media(max-width: 2560px)": {
              width: "170px",
            },
            "@media(max-width: 1400px)": {
              width: "160px",
            },
            "@media(max-width: 768px)": {
              width: "110px",
            },
          }}
          component="img"
          src={Logo}
          alt="Man avatar generic image"
        />
      </Box>
    );
  }
);

export default StyledLogo;
