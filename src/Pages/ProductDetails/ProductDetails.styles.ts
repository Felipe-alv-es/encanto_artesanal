export const getProductDetailContainerStyles = () => ({
  background: "#EAF1EA",
  display: "flex",
  justifyContent: "center",
  "> div": {
    width: "100%",
    maxWidth: "1344px",
    display: "flex",
    marginTop: "115px",
    "@media(max-width: 2560px)": {
      paddingY: "3%",
    },
    "@media(max-width: 1400px)": {
      maxWidth: "900px",
    },
    "@media(max-width: 768px)": {
      flexDirection: "column",
      paddingY: "6%",
    },
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
  "@media(max-width: 2560px)": {
    fontSize: "48px",
    fontWeight: "400",
    fontFamily: "kanit",
  },
  "@media(max-width: 1400px)": {
    fontSize: "32px",
    fontWeight: "400",
    fontFamily: "kanit",
  },
  "@media(max-width: 768px)": {
    fontSize: "24px",
    fontWeight: "400",
    fontFamily: "kanit",
  },
});

export const getPriceStyle = () => ({
  "@media(max-width: 2560px)": {
    fontSize: "20px",
    fontWeight: "300",
    fontFamily: "kanit",
  },
  "@media(max-width: 1400px)": {
    fontSize: "18px",
    fontWeight: "300",
    fontFamily: "kanit",
  },
  "@media(max-width: 768px)": {
    fontSize: "16px",
    fontWeight: "300",
    fontFamily: "kanit",
  },
});

export const getDescriptionStyle = () => ({
  fontWeight: "300",
  fontFamily: "kanit",
  "@media(max-width: 2560px)": {
    fontSize: "18px",
  },
  "@media(max-width: 1400px)": {
    fontSize: "16px",
  },
});
