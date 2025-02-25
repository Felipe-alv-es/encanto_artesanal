import React, { useState } from "react";
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
import { toSnakeCase } from "../../../../utils/toSnakeCase/index.tsx";
import useGradientByType from "../../../../Hooks/GradientSelector/index.tsx";
import { keyframes } from "@mui/system";

interface ListIconComponentProps {
  Logo: string;
  Text: string;
  ExpansionWidth: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const growsAndDecreases = keyframes`
  0% { transform: scale(0); opacity: 1; }
  50% { transform: scale(1.0); opacity: 1; }
  100% { transform: scale(1.0); opacity: 0; }
`;

const MenuItem = React.forwardRef<HTMLLIElement, ListIconComponentProps>(
  ({ Logo, Text, ExpansionWidth, onClick }, ref) => {
    const [isClicked, setIsClicked] = useState(false);
    const scrollValue = useScrollValue();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setIsClicked(true);
      onClick?.(event);

      setTimeout(() => {
        setIsClicked(false);
      }, 3200);
    };

    const gradientColor = useGradientByType(toSnakeCase(Text));

    return (
      <Box sx={{ position: "relative" }}>
        <Box
          ref={ref}
          component="button"
          role="button"
          onClick={handleClick}
          aria-label={Text}
          sx={menuItemContainerStyle(ExpansionWidth, scrollValue)}
        >
          <ListIconComponent Logo={Logo} />
          <Typography sx={menuItemTitleStyle}>{Text}</Typography>
        </Box>
        <Box
          className="AfterAnchor"
          sx={{
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "40%",
            left: "40%",
            zIndex: 1,
            "::after": {
              content: '""',
              borderRadius: "50%",
              position: "absolute",
              height: "5000px",
              width: "5000px",
              background: gradientColor,
              transform: "scale(0)",
              top: "50%",
              left: "50%",
              transformOrigin: "center",
              animation: isClicked ? `${growsAndDecreases} 3s ease` : "none",
              marginTop: "-2500px",
              marginLeft: "-2500px",
            },
          }}
        />
      </Box>
    );
  }
);

interface LateralMenuProps {
  handleFilter: (type: string | null) => void;
}

export const LateralMenu = React.forwardRef<HTMLLIElement, LateralMenuProps>(
  ({ handleFilter }, ref) => {
    const scrollValue = useScrollValue();
    const isNearBottom =
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 350;
    const remaining =
      document.body.scrollHeight - (window.innerHeight + window.scrollY);

    return (
      <Box sx={menuContainerStyle(scrollValue)} ref={ref}>
        <Box sx={menuListBoxStyle(scrollValue, isNearBottom, remaining)}>
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
