export const getContainerStyle = () => ({
  background: "#F2F7F2",
  display: "flex",
  justifyContent: "center",
  "> div": {
    width: "100%",
    maxWidth: "1344px",
    paddingY: "64px",
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
  gridTemplateColumns: "repeat(3, auto)",
  paddingTop: "64px",
  gap: "24px",
});
