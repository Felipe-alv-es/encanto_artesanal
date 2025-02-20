import React from "react";
import { Box, Typography } from "@mui/material";
import ListIconComponent from "../ListIconComponent/index.tsx";
import { useScrollValue } from "../../../../utils/getScrollValue/index.tsx";
import {
  menuContainerStyle,
  menuItemContainerStyle,
  menuItemTitleStyle,
  menuListBoxStyle,
} from "./LateralMenu.styles.ts";
import { productPageLateralMenuList } from "../../../../assets/Arrays/ProductPageLateralMenuList.tsx";

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

    return (
      <Box sx={menuContainerStyle(scrollValue)}>
        <Box sx={menuListBoxStyle(scrollValue)}>
          {productPageLateralMenuList.map((item) => (
            <Box key={item.id}>
              <MenuItem
                Logo={item.imageSrc}
                Text={item.Text}
                ExpansionWidth={item.ExpansionWidth}
                onClick={() => handleFilter?.(item.productType)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
);

export default LateralMenu;
