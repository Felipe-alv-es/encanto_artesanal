import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { galeryList } from "../../assets/Arrays/GaleryList.tsx";
import { getContainerStyle, StyledSwiperItem } from "./Galery.styles.tsx";

const Galery = () => {
  const params = {
    effect: "coverflow",
    slidesPerView: 4,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    modules: [EffectCoverflow],
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    className: "mySwiper",
  };

  return (
    <Box sx={getContainerStyle}>
      <Swiper {...params}>
        {galeryList.map((item) => (
          <SwiperSlide>
            <StyledSwiperItem
              title={item.title}
              description={item.description}
              imgSrc={item.imageSrc}
              imgAlt={item.imageAlt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Galery;
