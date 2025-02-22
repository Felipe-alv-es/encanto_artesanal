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
import { keyframes } from "@mui/system";

interface ListIconComponentProps {
  Logo: string;
  Text: string;
  ExpansionWidth: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const growsAndDecreases = keyframes`
  0% { transform: scale(0); }
  50% { transform: scale(1.0); }
  100% { transform: scale(0); }
`;

const MenuItem = React.forwardRef<HTMLLIElement, ListIconComponentProps>(
  ({ Logo, Text, ExpansionWidth, onClick }, ref) => {
    const [isClicked, setIsClicked] = useState(false);
    const scrollValue = useScrollValue();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setIsClicked(true);
      onClick?.(event);
      console.log("teste");

      setTimeout(() => {
        setIsClicked(false);
      }, 1000);
    };

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
              backgroundColor: "lightBlue",
              transition: "all 1s ease",
              transform: "scale(0)",
              top: "50%",
              left: "50%",
              transformOrigin: "center",
              animation: isClicked ? `${growsAndDecreases} 1s ease` : "none",
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
