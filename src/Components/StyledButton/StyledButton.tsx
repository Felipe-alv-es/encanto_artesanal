import React from "react";
import { Button } from "@mui/material";
import { StyledButtonProps } from "./StyledButton.types.ts";

export const StyledButton = React.forwardRef<HTMLDivElement, StyledButtonProps>(
  ({ text, icon, variant, ...props }, ref) => {
    return (
      <Button
        sx={{
          color: "#F2F2F2",
          borderColor: "#F2F2F2",
          padding: "20px",
          textTransform: "none",
          fontFamily: "Oranienbaum",
          fontSize: "20px",
          marginTop: "32px",
          "> svg": {
            marginLeft: "16px",
          },
        }}
        variant={variant}
        {...props}
      >
        {text}
        {icon}
      </Button>
    );
  }
);

export default StyledButton;
