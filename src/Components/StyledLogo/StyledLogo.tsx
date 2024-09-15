import { Box, Typography } from "@mui/material";
import React from "react";

export const StyledLogo = React.forwardRef<HTMLDivElement>(
  ({ ...props }, ref) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "10%",
          marginRight: "64px",
          cursor: "pointer",
        }}
        {...props}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontFamily: "Oranienbaum",
          }}
          color="#F2F2F2"
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
          color="#F2F2F2"
        >
          Artesanal
        </Typography>
      </Box>
    );
  }
);

export default StyledLogo;
