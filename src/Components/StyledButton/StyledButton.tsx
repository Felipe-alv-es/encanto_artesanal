import React from "react";
import { Button } from "@mui/material";
import StyledButtonProps from "./StyledButton.types.ts";

export const StyledButton = React.forwardRef<HTMLDivElement, StyledButtonProps>(
  ({ text, icon, variant, isWhiteBg, size, ...props }, ref) => {
    const buttonSize = () => {
      switch (size) {
        case "bg":
          return "20px";
        case "md":
          return "16px";
        case "sm":
          return "12px";
        default:
          return "20px";
      }
    };

    return (
      <Button
        sx={{
          color: isWhiteBg ? "#444444" : "#F2F2F2",
          borderColor: isWhiteBg ? "#444444" : "#F2F2F2",
          padding: buttonSize,
          textTransform: "none",
          fontFamily: "Oranienbaum",
          fontSize: buttonSize,
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
