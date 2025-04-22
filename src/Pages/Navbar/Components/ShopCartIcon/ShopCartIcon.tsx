import { IconButton, Box, Badge } from "@mui/material";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface ShopCartIconProps {
  carItemsCount: number;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ShopCartIcon = React.forwardRef<HTMLDivElement, ShopCartIconProps>(
  ({ carItemsCount, onClick }, ref) => {
    return (
      <IconButton onClick={onClick}>
        <Box
          sx={{
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Badge badgeContent={carItemsCount} color="primary">
            <FiShoppingCart size={24} color="#383838" />
          </Badge>
        </Box>
      </IconButton>
    );
  }
);

export default ShopCartIcon;
