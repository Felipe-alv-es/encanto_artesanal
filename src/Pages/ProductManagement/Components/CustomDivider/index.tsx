import React from "react";
import { Box, Divider } from "@mui/material";

const CustomDivider = React.forwardRef<HTMLLIElement>(() => {
  return (
    <>
      <Box padding={"32px"}>
        <Divider />
      </Box>
    </>
  );
});

export default CustomDivider;
