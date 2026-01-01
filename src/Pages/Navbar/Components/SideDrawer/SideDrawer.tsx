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
import { GiDoorRingHandle, GiSewingMachine } from "react-icons/gi";
import { PiHandSoap } from "react-icons/pi";

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
        case "/product-page/velas":
          return <RiCandleLine size={32} color="#383838" />;
        case "/product-page/cuidados-de-banho":
          return <PiHandSoap size={32} color="#383838" />;
        case "/product-page/kits-presenteaveis":
          return <GiDoorRingHandle size={32} color="#383838" />;
        case "/product-page/bordados":
          return <GiSewingMachine size={32} color="#383838" />;

        default:
          return <RiCandleLine size={32} color="#383838" />;
      }
    };

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
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
                onClick={handleScrollToTop}
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
