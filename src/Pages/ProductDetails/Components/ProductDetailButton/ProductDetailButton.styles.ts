export const getProductDetailButtonContainerStyle = () => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const getFirstProductDetailButtonStyle = () => ({
  borderRadius: "16px",
  borderColor: "#383838",
  color: "#383838",
  textTransform: "none",
  fontWeight: "400",
  fontFamily: "kanit",
  "&:hover": {
    backgroundColor: "#C2CCC2",
  },
  "@media(max-width: 2560px)": {
    paddingY: "8px",
    fontSize: "18px",
  },
  "@media(max-width: 1400px)": {
    paddingY: "4px",
    fontSize: "16px",
  },
});

export const getSecondProductDetailButtonStyle = () => ({
  borderRadius: "16px",
  borderColor: "#383838",
  color: "#EAF1EA",
  background: "#383838",
  textTransform: "none",
  fontWeight: "400",
  fontFamily: "kanit",
  gap: "8px",
  "&:hover": {
    backgroundColor: "#505050",
  },
  "@media(max-width: 2560px)": {
    paddingY: "8px",
    fontSize: "18px",
  },
  "@media(max-width: 1400px)": {
    paddingY: "4px",
    fontSize: "16px",
  },
});
