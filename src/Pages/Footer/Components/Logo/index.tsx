import React from "react";
import { Box } from "@mui/material";
import Logo from "../../../../assets/images/Logo/LojaLogo.png";

export const LogoComponent = React.forwardRef<HTMLLIElement>(() => {
  return (
    <Box
      sx={{
        width: "20%",
        height: "fit-content",
        "@media(max-width: 544px)": {
          width: "70%",
        },
      }}
      component="img"
      src={Logo}
      alt="Man avatar generic image"
    />
  );
});

export default LogoComponent;
