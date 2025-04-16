export const getProductPageTitleContainerStyle = () => ({
  display: "flex",
  justifyContent: "center",
  background: "#EAF1EA",
  width: "100%",
  "> div": {
    maxWidth: "1344px",
    paddingRight: "25%",
  },
  "@media(max-width: 2560px)": {
    paddingTop: "200px",
  },
  "@media(max-width: 768px)": {
    paddingTop: "120px",
  },
});

export const getProductPageTitleStyle = () => ({
  color: "#383838",
  "@media(max-width: 2560px)": {
    fontWeight: "500",
    fontSize: "48px",
    fontFamily: "kanit",
  },
  "@media(max-width: 768px)": {
    fontSize: "32px",
    fontWeight: "500",
    fontFamily: "kanit",
    paddingX: "16px",
  },
});

export const getProductPageSubtitleStyle = () => ({
  color: "#383838",
  "@media(max-width: 2560px)": {
    fontWeight: "300",
    fontSize: "18px",
    fontFamily: "kanit",
  },
  "@media(max-width: 768px)": {
    fontWeight: "300",
    fontSize: "14px",
    fontFamily: "kanit",
    paddingX: "16px",
  },
});
