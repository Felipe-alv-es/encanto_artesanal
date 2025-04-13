import React from "react";
import { Box } from "@mui/material";
import {
  getContainerStyle,
  getGaleryContentStyle,
  getMainItemStyle,
  getSideItemsStyle,
} from "./Galery.styles.tsx";
import GaleryItem from "./Components/GaleryItem/GaleryItem.tsx";
import { GaleryList } from "../../assets/Arrays/GaleryList.tsx";

const Galery = () => {
  const sideItems =
    GaleryList.length > 2
      ? [GaleryList[1], GaleryList[2]].map((item) => ({
          title: item.title,
          imageAlt: item.imagealt,
          imageSrc: item.imagesrc,
          producttype: item.producttype,
        }))
      : [];

  return (
    <Box sx={getContainerStyle()}>
      <Box sx={getGaleryContentStyle()}>
        {GaleryList.length > 0 && (
          <Box sx={getMainItemStyle()} key={GaleryList[0].id}>
            <GaleryItem
              title={GaleryList[0].title}
              imageAlt={GaleryList[0].imagealt}
              imageSrc={GaleryList[0].imagesrc}
              isPrincipal
              producttype={GaleryList[0].producttype}
            />
          </Box>
        )}
        <Box sx={getSideItemsStyle()}>
          {sideItems.map((item) => (
            <GaleryItem
              key={item.title}
              title={item.title}
              imageAlt={item.imageAlt}
              imageSrc={item.imageSrc}
              producttype={item.producttype}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Galery;
