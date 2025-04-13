export const getLogoContainerStyle = () => ({
  display: "flex",
  flexDirection: "column",
  width: "11%",
  marginRight: "64px",
  cursor: "pointer",
  borderStyle: "none",
  background: "transparent",
});

export const getFirstTitleStyle = () => ({
  color: "#383838",
  "@media(max-width: 2560px)": {
    typography: "h4",
    fontWeight: "bold",
    fontFamily: "Kanit",
  },
  "@media(max-width: 1400px)": {
    typography: "h5",
    fontWeight: "bold",
    fontFamily: "Kanit",
  },
  "@media(max-width: 768px)": {
    typography: "h6",
    fontWeight: "bold",
    fontFamily: "Kanit",
  },
});

export const getSecondTitleStyle = () => ({
  color: "#383838",
  marginLeft: "30px",
  "@media(max-width: 2560px)": {
    typography: "h4",
    fontWeight: "bold",
    fontFamily: "Kanit",
  },
  "@media(max-width: 1400px)": {
    typography: "h5",
    fontWeight: "bold",
    fontFamily: "Kanit",
  },
  "@media(max-width: 768px)": {
    typography: "h6",
    fontWeight: "bold",
    fontFamily: "Kanit",
  },
});
