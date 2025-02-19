import React from "react";
import { Box, Typography } from "@mui/material";
import ListIconComponent from "../ListIconComponent/index.tsx";
import Candle from "../../../../assets/images/ProductPage/candleImage.png";
import Soap from "../../../../assets/images/ProductPage/Sabonete.png";
import { useScrollValue } from "../../../../utils/getScrollValue/index.tsx";

interface ListIconComponentProps {
  Logo: string;
  Text: string;
  ExpansionWidth: number;
}

const MenuItem = React.forwardRef<HTMLLIElement, ListIconComponentProps>(
  ({ Logo, Text, ExpansionWidth }, ref) => {
    const scrollValue = useScrollValue();
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
          background: "#f2f2f2",
          transition: "width 0.5s ease, transform 0.5s ease",
          width: scrollValue === 0 ? ExpansionWidth : "64px",
          height: "64px",
          overflow: "hidden",
          borderRadius: "64px",
          marginTop: "8px",
          "&:hover": {
            width: ExpansionWidth,
            transform:
              scrollValue === 0 ? "" : `translateX(-${ExpansionWidth - 64}px)`,
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
  const scrollValue = useScrollValue();
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const isAboveSixtyPercent = scrollValue > maxScroll * 0.8;

  return (
    <Box
      sx={{
        transition: "0.7s",
        position: "relative",
        width: scrollValue === 0 ? "290px" : "90px",
        marginLeft: scrollValue === 0 ? "0px" : "76px",
      }}
    >
      <Box
        sx={{
          transform: isAboveSixtyPercent
            ? `translateY(-${Math.max(0, 250 - (maxScroll - scrollValue))}px)`
            : "",
          position: scrollValue === 0 ? "relative" : "fixed",
          transition: "1s",
        }}
      >
        <MenuItem Logo={Candle} Text="Velas Aromaticas" ExpansionWidth={250} />
        <MenuItem Logo={Soap} Text="Velas de Massagem" ExpansionWidth={275} />
        <MenuItem
          Logo={Soap}
          Text="Sabonetes Artesanais"
          ExpansionWidth={290}
        />
        <MenuItem Logo={Soap} Text="Sabonetes Temáticos" ExpansionWidth={285} />
      </Box>
    </Box>
  );
});

export default LateralMenu;
