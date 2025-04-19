import React from "react";
import { Box, Drawer, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  getSideDrawerContainerStyle,
  getSideDrawerItemListStyle,
  getSideDrawerListStyle,
} from "./SideDrawer.styles.ts";
import SideDrawerSocial from "../SideDrawerSocial/SideDrawerSocial.tsx";

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
    return (
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={getSideDrawerContainerStyle}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {navBarItems.map((item) => (
              <ListItem
                component={Link}
                to={item.path}
                key={item.label}
                sx={getSideDrawerListStyle}
              >
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
