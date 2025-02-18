import React from "react";
import { Box, Typography } from "@mui/material";
import ListIconComponent from "../ListIconComponent/index.tsx";
import Candle from "../../../../assets/images/ProductPage/candleImage.png";
import Soap from "../../../../assets/images/ProductPage/Sabonete.png";

interface ListIconComponentProps {
  Logo: string;
  Text: string;
  ExpansionWidth: number;
}

const MenuItem = React.forwardRef<HTMLLIElement, ListIconComponentProps>(
  ({ Logo, Text, ExpansionWidth }, ref) => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
          background: "#f2f2f2",
          transition: "width 0.3s ease",
          width: "64px",
          height: "64px",
          overflow: "hidden",
          borderRadius: "64px",
          marginTop: "8px",
          "&:hover": {
            width: ExpansionWidth,
          },
        }}
      >
        <ListIconComponent Logo={Logo} />
        <Typography
          sx={{
            fontWeight: "700",
            whiteSpace: "nowrap",
            marginLeft: "16px",
            fontSize: 20,
          }}
        >
          {Text}
        </Typography>
      </Box>
    );
  }
);

export const LateralMenu = React.forwardRef<HTMLLIElement>(() => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "35%",
        left: "3%",
      }}
    >
      <MenuItem Logo={Candle} Text="Velas Aromaticas" ExpansionWidth={250} />
      <MenuItem Logo={Soap} Text="Sabonetes Artesanais" ExpansionWidth={290} />
    </Box>
  );
});

export default LateralMenu;
