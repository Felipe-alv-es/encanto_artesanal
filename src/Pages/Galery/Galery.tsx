import React from "react";
import { Box } from "@mui/material";
import { galeryList } from "../../assets/Arrays/GaleryList.tsx";
import {
  getContainerStyle,
  getGaleryContentStyle,
  getMainItemStyle,
  getSideItemsStyle,
} from "./Galery.styles.tsx";
import GaleryItem from "./Components/GaleryItem/GaleryItem.tsx";

const Galery = () => {
  const mainItem = galeryList[0];
  const sideItems = galeryList.slice(1, 3);

  return (
    <Box sx={getContainerStyle()}>
      <Box sx={getGaleryContentStyle()}>
        <Box sx={getMainItemStyle()}>
          <GaleryItem
            title={mainItem.title}
            imageAlt={mainItem.imageAlt}
            imageSrc={mainItem.imageSrc}
            isPrincipal
          />
        </Box>

        <Box sx={getSideItemsStyle()}>
          {sideItems.map((item) => (
            <GaleryItem
              key={item.title}
              title={item.title}
              imageAlt={item.imageAlt}
              imageSrc={item.imageSrc}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Galery;
