export const getProductDetailMobileCarouselContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "32px",
  width: "100vw",
});

export const getProductDetailMobileCarouselContentStyle = () => ({
  overflow: "hidden",
});

export const getCategoryItemContainerStyle = () => ({
  display: "flex",
  height: "300px",
  width: "100%",
  flexShrink: 0,
  justifyContent: "center",
});

export const getProductDetailMobileCarouselSwiperStyle = (
  activeIndex: number,
  itemWidth: number
) => ({
  display: "flex",
  transition: "transform 0.4s ease-in-out",
  transform: `translateX(-${activeIndex * itemWidth}px)`,
  gap: "16px",
  width: "100%",
});
