export const getReleaseMobileCarouselContainerStyle = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingY: "32px",
});

export const getReleaseMobileCarouselContentStyle = () => ({
  overflow: "hidden",
  width: "85%",
});

export const getReleaseMobileCarouselSwiperStyle = (
  activeIndex: number,
  itemWidth: number
) => ({
  display: "flex",
  transition: "transform 0.4s ease",
  transform: `translateX(-${activeIndex * itemWidth}px)`,
  gap: "16px",
});
