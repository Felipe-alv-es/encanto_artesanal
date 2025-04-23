import React, { useEffect, useState } from "react";
import { IconButton, Badge, Box, useMediaQuery } from "@mui/material";
import { FiShoppingCart } from "react-icons/fi";
import { keyframes } from "@emotion/react";

interface ShopCartIconProps {
  carItemsCount: number;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

export const ShopCartIcon = React.forwardRef<
  HTMLButtonElement,
  ShopCartIconProps
>(({ carItemsCount, onClick, setShowHeader }, ref) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevCount, setPrevCount] = useState(carItemsCount);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const isItemAdded = carItemsCount > prevCount;
    if (isItemAdded) {
      setShowHeader(true);
      const delay = isMobile ? 300 : 0;
      const timeout = setTimeout(() => {
        triggerAnimation();
      }, delay);
      return () => clearTimeout(timeout);
    }

    setPrevCount(carItemsCount);
  }, [carItemsCount, isMobile, prevCount, setShowHeader]);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <IconButton onClick={onClick} ref={ref}>
      <Box
        sx={{
          width: "30px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Badge
          badgeContent={carItemsCount}
          color="primary"
          sx={{
            animation: isAnimating ? `${pulse} 0.3s` : "none",
          }}
        >
          <FiShoppingCart size={24} color="#383838" />
        </Badge>
      </Box>
    </IconButton>
  );
});

export default ShopCartIcon;
