import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { galeryList } from "../../assets/Arrays/GaleryList.tsx";

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
      slideShadows: true,
    },
    className: "mySwiper",
  };

  return (
    <Box
      sx={{
        background: "#6bb4ad",
        padding: "5% 10% 5% 10%",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        fontWeight={400}
        color="white"
        sx={{ marginBottom: "64px" }}
      >
        Nossos produtos
      </Typography>
      <Swiper {...params}>
        {galeryList.map((item) => (
          <SwiperSlide>
            <Box
              sx={{
                background: "white",
                padding: "16px",
                display: "flex",
                borderRadius: "32px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "500px",
                  background: "white",
                  borderRadius: "32px",
                }}
              >
                <Box
                  component="img"
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "32px",
                    marginBottom: "16px",
                  }}
                />
                <Box sx={{ padding: "32px" }}>
                  <Typography variant="h5">Titulo</Typography>
                  <Typography variant="body2" fontSize={"16px"}>
                    Descrição do produto, um dois três, quem errar o passo perde
                    a vez
                  </Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Galery;
