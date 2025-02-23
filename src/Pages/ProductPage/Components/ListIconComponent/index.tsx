import React from "react";
import { Box } from "@mui/material";

interface ListIconComponentProps {
  Logo: string;
}

export const ListIconComponent = React.forwardRef<
  HTMLLIElement,
  ListIconComponentProps
>(({ Logo }, ref) => {
  return (
    <Box
      sx={{ width: "36px" }}
      component="img"
      src={Logo}
      alt="Man avatar generic image"
    />
  );
});

export default ListIconComponent;
