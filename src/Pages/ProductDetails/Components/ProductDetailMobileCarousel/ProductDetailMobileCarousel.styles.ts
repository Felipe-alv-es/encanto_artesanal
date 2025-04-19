export const getProductDetailMobileCarouselContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "32px",
  paddingBottom: "16px",
  width: "100%",
});

export const getProductDetailMobileCarouselContentStyle = () => ({
  overflow: "hidden",
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

export const getProductDetailMobileCarouselImageStyle = () => ({
  width: "250px",
  height: "300px",
  objectFit: "cover",
  borderRadius: "16px",
  transition: "transform 0.5s ease-out",
  display: "block",
});

export const getProductDetailMobileCarouselImageContainerStyle = () => ({
  display: "flex",
  height: "300px",
  width: "295px",
  flexShrink: 0,
  justifyContent: "center",
});
