import { Box, Typography } from "@mui/material";
import React from "react";

interface StyledLogoProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const StyledLogo = React.forwardRef<HTMLDivElement, StyledLogoProps>(
  ({ onClick, ...props }, ref) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "10%",
          marginRight: "64px",
          cursor: "pointer",
          background: "transparent",
          borderStyle: "none",
        }}
        role="button"
        component={"button"}
        onClick={onClick}
        {...props}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Oranienbaum",
          }}
          color="#383838"
        >
          Encanto
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Oranienbaum",
            textAlign: "right",
          }}
          color="#383838"
        >
          Artesanal
        </Typography>
      </Box>
    );
  }
);

export default StyledLogo;
