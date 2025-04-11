import React from "react";
import { Box } from "@mui/material";
import {
  getContainerStyle,
  getGaleryContentStyle,
  getMainItemStyle,
  getSideItemsStyle,
} from "./Galery.styles.tsx";
import GaleryItem from "./Components/GaleryItem/GaleryItem.tsx";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";

const Galery = () => {
  const { apiData, isLoading } = useApiData();

  const sideItems =
    apiData?.data && apiData.data.length > 2
      ? [apiData.data[1], apiData.data[2]].map((item) => ({
          title: item.title,
          price: item.description,
          imageAlt: item.imagealt,
          imageSrc: item.imagesrc,
          producttype: item.producttype,
        }))
      : [];

  return (
    <Box sx={getContainerStyle()}>
      <Box sx={getGaleryContentStyle()}>
        {apiData && apiData.data.length > 0 && (
          <Box sx={getMainItemStyle()} key={apiData.data[0].id}>
            <GaleryItem
              title={apiData.data[0].title}
              price={apiData.data[0].description}
              imageAlt={apiData.data[0].imagealt}
              imageSrc={apiData.data[0].imagesrc[0]}
              isLoading={isLoading}
              isPrincipal
              producttype={apiData.data[0].producttype}
            />
          </Box>
        )}
        <Box sx={getSideItemsStyle()}>
          {sideItems.map((item) => (
            <GaleryItem
              key={item.title}
              title={item.title}
              price={item.price}
              imageAlt={item.imageAlt}
              imageSrc={item.imageSrc[0]}
              isLoading={isLoading}
              producttype={item.producttype}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Galery;
