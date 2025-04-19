export const getProductDetailButtonContainerStyle = () => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const getFirstProductDetailButtonStyle = () => ({
  borderRadius: "16px",
  borderColor: "#383838",
  color: "#383838",
  paddingY: "8px",
  textTransform: "none",
  fontSize: "18px",
  fontWeight: "400",
  fontFamily: "kanit",
  "&:hover": {
    backgroundColor: "#C2CCC2",
  },
});

export const getSecondProductDetailButtonStyle = () => ({
  borderRadius: "16px",
  borderColor: "#EAF1EA",
  color: "#EAF1EA",
  background: "#383838",
  paddingY: "8px",
  textTransform: "none",
  fontSize: "18px",
  fontWeight: "400",
  fontFamily: "kanit",
  "&:hover": {
    backgroundColor: "#505050",
  },
});
