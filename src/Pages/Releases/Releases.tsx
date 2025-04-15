import React from "react";
import { Box, Skeleton, Typography, useMediaQuery } from "@mui/material";
import {
  getContainerStyle,
  getGridStyle,
  getPageTitleStyle,
} from "./Releases.styles.ts";
import ReleaseItem from "./Components/ReleaseItem/ReleaseItem.tsx";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";
import ReleasesSkeleton from "./Components/Skeleton/index.tsx";
import ReleaseMobileStepper from "./Components/ReleaseMobileCarousel/ReleaseMobileCarousel.tsx";

const Releases = () => {
  const { apiData, isLoading } = useApiData();
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (isLoading) {
    return <ReleasesSkeleton />;
  }

  return (
    <Box sx={getContainerStyle}>
      <Box>
        <Typography sx={getPageTitleStyle}>
          {"Conheça nossas novidades"}
        </Typography>
        {isMobile ? (
          <ReleaseMobileStepper />
        ) : (
          <Box sx={getGridStyle}>
            {apiData &&
              apiData.data
                .slice(0, 6)
                .map((item) => (
                  <ReleaseItem
                    key={item.id}
                    imageSrc={item.imagesrc[0]}
                    imageAlt={item.imagealt}
                    title={item.title}
                    price={item.description}
                    producttype={item.producttype}
                  />
                ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Releases;
