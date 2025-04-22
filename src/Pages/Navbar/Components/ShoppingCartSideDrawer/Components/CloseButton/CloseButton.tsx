import React from "react";
import { Box } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";

interface CloseButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const CloseButton = React.forwardRef<HTMLDivElement, CloseButtonProps>(
  ({ onClick }, ref) => {
    return (
      <Box
        component={"button"}
        onClick={onClick}
        sx={{
          background: "#f08080",
          height: "80px",
          borderStyle: "none",
          borderRadius: "8px",
          "@media(max-width: 2560px)": {
            width: "64px",
            "> svg": {
              height: "32px",
              width: "32px",
            },
          },
          "@media(max-width: 768px)": {
            width: "40px",
            "> svg": {
              height: "24px",
              width: "24px",
            },
          },
        }}
      >
        <IoCloseSharp color="#fff7ff" />
      </Box>
    );
  }
);

export default CloseButton;
