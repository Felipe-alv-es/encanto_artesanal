import React from "react";
import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  getSideDrawerContainerStyle,
  getSideDrawerItemListStyle,
  getSideDrawerListStyle,
} from "./SideDrawer.styles.ts";
import SideDrawerSocial from "../SideDrawerSocial/SideDrawerSocial.tsx";
import { RiCandleLine } from "react-icons/ri";
import { TbMassage } from "react-icons/tb";
import { GiDoorRingHandle } from "react-icons/gi";
import {
  PiPottedPlant,
  PiFlowerLotusDuotone,
  PiHandSoap,
} from "react-icons/pi";

interface SideDrawerProps {
  drawerOpen: boolean;
  toggleDrawer: (open: boolean) => () => void;
  navBarItems: {
    label: string;
    path: string;
  }[];
}

export const SideDrawer = React.forwardRef<HTMLDivElement, SideDrawerProps>(
  ({ drawerOpen, toggleDrawer, navBarItems }, ref) => {
    const handleGetIcon = (index: number) => {
      switch (navBarItems[index].path) {
        case "/product-page/velas-moldadas":
          return <PiPottedPlant size={32} color="#383838" />;
        case "/product-page/velas-de-massagem":
          return <TbMassage size={32} color="#383838" />;
        case "/product-page/velas-container":
          return <RiCandleLine size={32} color="#383838" />;
        case "/product-page/sabonetes-decorativos":
          return <PiFlowerLotusDuotone size={32} color="#383838" />;
        case "/product-page/geleias-de-banho":
          return <PiHandSoap size={32} color="#383838" />;
        case "/product-page/joias-de-resina":
          return <GiDoorRingHandle size={32} color="#383838" />;
        default:
          return <RiCandleLine size={32} color="#383838" />;
      }
    };

    return (
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={getSideDrawerContainerStyle}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navBarItems.map((item, index) => (
              <ListItem
                component={Link}
                to={item.path}
                key={item.label}
                sx={getSideDrawerListStyle}
              >
                <Box>{handleGetIcon(index)}</Box>
                <Typography sx={getSideDrawerItemListStyle}>
                  {item.label}
                </Typography>
              </ListItem>
            ))}
          </List>
          <SideDrawerSocial />
        </Box>
      </Drawer>
    );
  }
);

export default SideDrawer;
