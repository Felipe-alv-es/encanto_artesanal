import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import {
  getProductDetailMobileCarouselContainerStyle,
  getProductDetailMobileCarouselContentStyle,
  getProductDetailMobileCarouselImageContainerStyle,
  getProductDetailMobileCarouselImageStyle,
  getProductDetailMobileCarouselSwiperStyle,
} from "./ProductDetailMobileCarousel.styles.ts";

interface ReleaseMobileCarouselProps {
  product: {
    id: number;
    title: string;
    description: string;
    largedescription: string;
    imagesrc: string[];
    imagealt: string;
    producttype: string;
  };
}

export const ReleaseMobileCarousel = React.forwardRef<
  HTMLDivElement,
  ReleaseMobileCarouselProps
>(({ product }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [itemWidth, setItemWidth] = React.useState(0);
  const itemRef = React.useRef<HTMLDivElement | null>(null);

  const measureItem = () => {
    if (itemRef.current && itemWidth === 0) {
      const gap = 16;
      const width = itemRef.current.offsetWidth + gap;
      setItemWidth(width);
    }
  };

  React.useEffect(() => {
    measureItem();
    window.addEventListener("resize", measureItem);
    return () => {
      window.removeEventListener("resize", measureItem);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, product.imagesrc.length - 1));
  };

  return (
    <>
      <Box sx={getProductDetailMobileCarouselContainerStyle}>
        <IconButton onClick={handlePrev} disabled={activeIndex === 0}>
          <FaRegArrowAltCircleLeft color="#6bb4ad" />
        </IconButton>

        <Box sx={getProductDetailMobileCarouselContentStyle}>
          <Box
            ref={ref}
            sx={getProductDetailMobileCarouselSwiperStyle(
              activeIndex,
              itemWidth
            )}
          >
            {product.imagesrc.map((item, index) => (
              <Box
                key={item}
                ref={index === 0 ? itemRef : null}
                sx={getProductDetailMobileCarouselImageContainerStyle}
              >
                <Box
                  component="img"
                  src={item}
                  alt={product.imagealt || "Imagem do produto"}
                  sx={getProductDetailMobileCarouselImageStyle}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <IconButton
          onClick={handleNext}
          disabled={activeIndex === product.imagesrc.length - 1}
        >
          <FaRegArrowAltCircleRight color="#6bb4ad" />
        </IconButton>
      </Box>
      <Typography
        sx={{ textAlign: "center", fontSize: "12px", paddingBottom: "32px" }}
      >
        {`${activeIndex + 1} | ${product.imagesrc.length}`}
      </Typography>
    </>
  );
});

export default ReleaseMobileCarousel;
