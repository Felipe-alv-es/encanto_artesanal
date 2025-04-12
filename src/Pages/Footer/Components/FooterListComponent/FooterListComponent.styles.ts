export const getContainerStyle = () => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

export const getContainerContentStyle = () => ({
  height: "60%",
  display: "flex",
  gap: "32px",
  "@media(max-width: 2560px)": {
    width: "50%",
  },
  "@media(max-width: 1400px)": {
    width: "70%",
  },
});

export const getTitleStyle = () => ({
  textAlign: "center",
  marginBottom: "16px",
  fontFamily: "kanit",
  color: "#6bb4ad",
  fontSize: "28px",
});

export const getSubtitleStyle = () => ({
  fontWeight: "normal",
  textAlign: "center",
  marginBottom: "32px",
  fontSize: "16px",
  color: "#383838",
});

export const getFooterMenuStyle = () => ({
  display: "flex",
  padding: "16px",
  justifyContent: "center",
  textAlign: "center",
  "@media(max-width: 544px)": {
    flexDirection: "column",
    padding: "32px",
    placeItems: "center",
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
