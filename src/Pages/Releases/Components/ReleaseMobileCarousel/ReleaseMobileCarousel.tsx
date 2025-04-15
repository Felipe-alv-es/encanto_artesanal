import React from "react";
import { Box, IconButton } from "@mui/material";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import ReleaseItem from "../ReleaseItem/ReleaseItem.tsx";
import ReleasesSkeleton from "../Skeleton/index.tsx";
import useApiData from "../../../../Hooks/FetchApiHooks/index.tsx";
import {
  getReleaseMobileCarouselContainerStyle,
  getReleaseMobileCarouselContentStyle,
  getReleaseMobileCarouselSwiperStyle,
} from "./ReleaseMobileCarousel.styles.ts";

const ReleaseMobileCarousel = () => {
  const { apiData, isLoading } = useApiData();
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (isLoading || !apiData || !apiData.data.length) {
    return <ReleasesSkeleton />;
  }

  const releases = apiData.data.slice(0, 6);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, releases.length - 1));
  };

  return (
    <Box sx={getReleaseMobileCarouselContainerStyle}>
      <IconButton onClick={handlePrev} disabled={activeIndex === 0}>
        <FaRegArrowAltCircleLeft color="#6bb4ad" />
      </IconButton>

      <Box sx={getReleaseMobileCarouselContentStyle}>
        <Box sx={getReleaseMobileCarouselSwiperStyle(activeIndex)}>
          {releases.map((item) => (
            <Box key={item.id}>
              <ReleaseItem
                imageSrc={item.imagesrc[0]}
                imageAlt={item.imagealt}
                title={item.title}
                price={item.description}
                producttype={item.producttype}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <IconButton
        onClick={handleNext}
        disabled={activeIndex === releases.length - 1}
      >
        <FaRegArrowAltCircleRight color="#6bb4ad" />
      </IconButton>
    </Box>
  );
};

export default ReleaseMobileCarousel;
