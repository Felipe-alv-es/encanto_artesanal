//@ts-ignore
import Logo from "../../../../assets/images/Logo/LojaLogo.png";
import React from "react";
import { Box } from "@mui/material";

export const LogoComponent = React.forwardRef<HTMLLIElement>(() => {
  return (
    <Box
      sx={{
        width: "150px",
        height: "fit-content",
        "@media(max-width: 768px)": {
          width: "100px",
        },
      }}
      component="img"
      src={Logo}
      alt="Man avatar generic image"
    />
  );
});

export default LogoComponent;
