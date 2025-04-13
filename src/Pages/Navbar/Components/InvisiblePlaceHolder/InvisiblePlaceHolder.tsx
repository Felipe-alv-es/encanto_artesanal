import React from "react";
import { Box } from "@mui/material";
import { FaInstagram } from "react-icons/fa";

export const InvisiblePlaceHolder = React.forwardRef<HTMLDivElement>((ref) => {
  return (
    <Box sx={{ opacity: 0 }}>
      <FaInstagram size={32} />
    </Box>
  );
});

export default InvisiblePlaceHolder;
