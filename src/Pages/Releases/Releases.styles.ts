export const getContainerStyle = () => ({
  background: "#F2F7F2",
  display: "flex",
  justifyContent: "center",
  paddingY: "3%",
  "> div": {
    width: "100%",
    "@media(max-width: 2560px)": {
      maxWidth: "1344px",
    },
    "@media(max-width: 1400px)": {
      maxWidth: "900px",
    },
  },
});

export const getPageTitleStyle = () => ({
  textAlign: "center",
  typography: "h3",
  fontWeight: "300",
  fontFamily: "kanit",
});

export const getGridStyle = () => ({
  display: "grid",
  placeItems: "center",
  paddingTop: "64px",
  gap: "24px",
  gridTemplateColumns: "repeat(3, auto)",
});
