import React from "react";
import { Box, IconButton, Input, Typography } from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  getQuantityComponentContainerStyle,
  getQuantityComponentInputStyle,
  getQuantityTitleStyle,
} from "./QuantityComponent.styles.ts";

interface QuantityComponentProps {
  quantity: number;
  setQuantity: (value: React.SetStateAction<number>) => void;
}

const QuantityComponent = React.forwardRef<
  HTMLDivElement,
  QuantityComponentProps
>(({ quantity, setQuantity }, ref) => {
  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <Box ref={ref}>
      <Typography sx={getQuantityTitleStyle}>{"Quantidade:"}</Typography>
      <Box sx={getQuantityComponentContainerStyle}>
        <IconButton onClick={handleDecrement}>
          <FaMinus size={"18px"} />
        </IconButton>
        <Input
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          inputProps={{ min: 1 }}
          disableUnderline
          sx={getQuantityComponentInputStyle}
        />
        <IconButton onClick={handleIncrement} size="small">
          <FaPlus />
        </IconButton>
      </Box>
    </Box>
  );
});

export default QuantityComponent;
