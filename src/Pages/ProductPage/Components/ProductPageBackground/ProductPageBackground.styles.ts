export const productPageBackgroundStyle = (gradientType: string) => ({
  placeItems: "center",
  background: gradientType,
  paddingBottom: "64px",
  overflow: "hidden",
  position: "relative",
  "> div:nth-of-type(2)": {
    paddingTop: "150px",
  },
});
