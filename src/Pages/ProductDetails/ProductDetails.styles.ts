export const getProductDetailContainerStyles = () => ({
  background: "#EAF1EA",
  display: "flex",
  justifyContent: "center",
  "> div": {
    width: "100%",
    maxWidth: "1344px",
    paddingY: "3%",
    display: "flex",
    marginTop: "115px",
  },
});

export const getImagesContainerStyle = () => ({
  display: "flex",
  gap: 2,
});

export const getProductContentContainerStyle = () => ({
  display: "flex",
  flexDirection: "column",
  padding: "32px",
  gap: "32px",
});

export const getTitleStyle = () => ({
  fontSize: "48px",
  fontWeight: "400",
  fontFamily: "kanit",
});

export const getPriceStyle = () => ({
  fontSize: "20px",
  fontWeight: "300",
  fontFamily: "kanit",
});

export const getDescriptionStyle = () => ({
  fontSize: "18px",
  fontWeight: "300",
  fontFamily: "kanit",
  paddingBottom: "16px",
});
