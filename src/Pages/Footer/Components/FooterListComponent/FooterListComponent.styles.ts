export const getContainerStyle = () => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "@media(max-width: 768px)": {
    paddingY: "16px",
  },
});

export const getContainerContentStyle = () => ({
  height: "60%",
  gap: "32px",
  display: "flex",
  "@media(max-width: 2560px)": {
    width: "50%",
  },
  "@media(max-width: 1400px)": {
    width: "70%",
  },
  "@media(max-width: 768px)": {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const getTitleStyle = () => ({
  textAlign: "center",
  marginBottom: "16px",
  fontFamily: "kanit",
  color: "#6bb4ad",
  "@media(max-width: 2560px)": {
    fontSize: "28px",
  },
  "@media(max-width: 768px)": {
    fontSize: "24px",
  },
});

export const getSubtitleStyle = () => ({
  textAlign: "center",
  color: "#383838",
  "@media(max-width: 2560px)": {
    fontSize: "16px",
  },
  "@media(max-width: 768px)": {
    fontSize: "16px",
  },
});

export const getFooterMenuStyle = () => ({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  "@media(max-width: 2560px)": {
    padding: "16px",
  },
  "@media(max-width: 768px)": {
    padding: "0px",
  },
});

export const getlistTitleStyle = () => ({
  color: "#6bb4ad",
  typography: "h6",
  fontWeight: "bold",
  "@media(max-width: 428px)": {
    textAlign: "center",
  },
});

export const getListStyle = () => ({
  "> ul": {
    listStyle: "none",
    display: "flex",
    "> li": {
      textDecoration: "none",
      color: "#383838",
      cursor: "pointer",
      paddingTop: "4px",
      "> *": {
        textDecoration: "none",
        color: "#383838",
        cursor: "pointer",
        fontWeight: "500",
        fontFamily: "kanit",
      },
    },
  },
});
