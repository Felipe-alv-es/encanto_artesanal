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
          width: "11%",
          marginRight: "64px",
          cursor: "pointer",
          borderStyle: "none",
          background: "transparent",
        }}
        role="button"
        component={"button"}
        onClick={onClick}
        {...props}
      >
        <Typography
          sx={{
            "@media(max-width: 2560px)": {
              typography: "h4",
              fontWeight: "bold",
              fontFamily: "Kanit",
            },
            "@media(max-width: 1400px)": {
              typography: "h5",
              fontWeight: "bold",
              fontFamily: "Kanit",
            },
          }}
          color="#383838"
        >
          Encanto
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginLeft: "30px",
            "@media(max-width: 2560px)": {
              typography: "h4",
              fontWeight: "bold",
              fontFamily: "Kanit",
            },
            "@media(max-width: 1400px)": {
              typography: "h5",
              fontWeight: "bold",
              fontFamily: "Kanit",
            },
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
