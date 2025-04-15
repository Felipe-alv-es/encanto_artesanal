export const getContainerStyle = () => ({
  background: "#EAF1EA",
  display: "flex",
  justifyContent: "center",
  "> div": {
    width: "100%",
    "@media(max-width: 2560px)": {
      maxWidth: "1344px",
      paddingY: "3%",
    },
    "@media(max-width: 1400px)": {
      maxWidth: "900px",
      paddingY: "3%",
    },
    "@media(max-width: 768px)": {
      paddingY: "8%",
    },
  },
});

export const getPageTitleStyle = () => ({
  textAlign: "center",
  "@media(max-width: 2560px)": {
    fontSize: "48px",
    fontWeight: "300",
    fontFamily: "kanit",
  },
  "@media(max-width: 768px)": {
    fontSize: "24px",
    fontWeight: "300",
    fontFamily: "kanit",
  },
});

export const getGridStyle = () => ({
  display: "grid",
  placeItems: "center",
  paddingTop: "64px",
  gap: "24px",
  gridTemplateColumns: "repeat(3, auto)",
});
