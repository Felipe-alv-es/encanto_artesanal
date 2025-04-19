import React from "react";
import { Box, IconButton } from "@mui/material";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import {
  getCategoryItemContainerStyle,
  getProductDetailMobileCarouselContainerStyle,
  getProductDetailMobileCarouselContentStyle,
  getProductDetailMobileCarouselSwiperStyle,
} from "./CategoriesMobileCarousel.styles.ts";
import CategoryItem from "../CategoryItem/CategoryItem.tsx";
import { useNavigate } from "react-router-dom";

interface CategoriesMobileCarouselProps {
  categoriesOptions: {
    title: string;
    imageSrc: any;
    imageAlt: string;
  }[];
}

export const CategoriesMobileCarousel = React.forwardRef<
  HTMLDivElement,
  CategoriesMobileCarouselProps
>(({ categoriesOptions }, ref) => {
  const navigate = useNavigate();
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
    setActiveIndex((prev) => Math.min(prev + 1, categoriesOptions.length - 1));
  };

  return (
    <Box sx={getProductDetailMobileCarouselContainerStyle}>
      <IconButton onClick={handlePrev} disabled={activeIndex === 0}>
        <FaRegArrowAltCircleLeft color="#6bb4ad" />
      </IconButton>

      <Box sx={getProductDetailMobileCarouselContentStyle}>
        <Box
          ref={ref}
          sx={getProductDetailMobileCarouselSwiperStyle(activeIndex, itemWidth)}
        >
          {categoriesOptions.map((item, index) => (
            <Box
              key={item.title}
              ref={index === 0 ? itemRef : null}
              sx={getCategoryItemContainerStyle}
            >
              <CategoryItem
                title={item.title}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                onClick={() => navigate("/product-page")}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <IconButton
        onClick={handleNext}
        disabled={activeIndex === categoriesOptions.length - 1}
      >
        <FaRegArrowAltCircleRight color="#6bb4ad" />
      </IconButton>
    </Box>
  );
});

export default CategoriesMobileCarousel;
