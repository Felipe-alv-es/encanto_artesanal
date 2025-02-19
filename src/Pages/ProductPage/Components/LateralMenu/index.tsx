import React from "react";
import { Box, Typography } from "@mui/material";
import ListIconComponent from "../ListIconComponent/index.tsx";
import Candle from "../../../../assets/images/ProductPage/candleImage.png";
import AllProducts from "../../../../assets/images/ProductPage/TodosOsProdutos.png";
import MassageCandles from "../../../../assets/images/ProductPage/VelasDeMassagem.png";
import BathGelly from "../../../../assets/images/ProductPage/GeleiaDeBanho.png";
import ContainerCandles from "../../../../assets/images/ProductPage/VelasContainer.png";
import MassageSoap from "../../../../assets/images/ProductPage/SaboneteDeMassagem.png";
import DecorativeSoap from "../../../../assets/images/ProductPage/SabonetesDecorativos.png";
import { useScrollValue } from "../../../../utils/getScrollValue/index.tsx";
import {
  menuContainerStyle,
  menuItemContainerStyle,
  menuItemTitleStyle,
  menuListBoxStyle,
} from "./LateralMenu.styles.ts";

interface ListIconComponentProps {
  Logo: string;
  Text: string;
  ExpansionWidth: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const MenuItem = React.forwardRef<HTMLLIElement, ListIconComponentProps>(
  ({ Logo, Text, ExpansionWidth, onClick }, ref) => {
    const scrollValue = useScrollValue();
    return (
      <Box
        ref={ref}
        component="button"
        role="button"
        onClick={onClick}
        tabIndex={0}
        aria-label={Text}
        sx={menuItemContainerStyle(ExpansionWidth, scrollValue)}
      >
        <ListIconComponent Logo={Logo} />
        <Typography sx={menuItemTitleStyle}>{Text}</Typography>
      </Box>
    );
  }
);

interface LateralMenuProps {
  handleFilter: (type: string | null) => void;
}

export const LateralMenu = React.forwardRef<HTMLLIElement, LateralMenuProps>(
  ({ handleFilter }) => {
    const scrollValue = useScrollValue();
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const isAboveSixtyPercent = scrollValue > maxScroll * 0.8;

    return (
      <Box sx={menuContainerStyle(scrollValue)}>
        <Box sx={menuListBoxStyle(scrollValue, maxScroll, isAboveSixtyPercent)}>
          <MenuItem
            Logo={AllProducts}
            Text="Todos os Itens"
            ExpansionWidth={225}
            onClick={() => handleFilter?.(null)}
          />
          <MenuItem
            Logo={Candle}
            Text="Velas Moldadas"
            ExpansionWidth={235}
            onClick={() => handleFilter?.("velas_de_massagem")}
          />
          <MenuItem
            Logo={MassageCandles}
            Text="Velas de Massagem"
            ExpansionWidth={275}
          />
          <MenuItem
            Logo={ContainerCandles}
            Text="Velas Container"
            ExpansionWidth={240}
          />
          <MenuItem
            Logo={BathGelly}
            Text="Geléia de Banho"
            ExpansionWidth={240}
          />
          <MenuItem
            Logo={MassageSoap}
            Text="Sabonetes de Massagem"
            ExpansionWidth={315}
          />
          <MenuItem
            Logo={DecorativeSoap}
            Text="Sabonetes Decorativos"
            ExpansionWidth={300}
          />
        </Box>
      </Box>
    );
  }
);

export default LateralMenu;
