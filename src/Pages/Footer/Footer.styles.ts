export const getContainerStyles = () => ({
  background: "#FFFFFF",
  padding: "3% 25% 3% 25%",
  borderStyle: "solid",
  borderColor: "#528B85",
  borderWidth: "0px 0px 5px 0px",
  "@media(max-width: 1700px)": {
    padding: "3% 20% 3% 20%",
  },
  "@media(max-width: 544px)": {
    padding: "32px 16px 16px 16px",
  },
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

export const getTitleStyle = () => ({
  textAlign: "center",
  marginBottom: "16px",
  typography: "h4",
  fontFamily: "kanit",
  color: "#6bb4ad",
});

export const getSubtitleStyle = () => ({
  fontWeight: "normal",
  textAlign: "center",
  marginBottom: "32px",
  typography: "body1",
  color: "#383838",
});

export const getListStyle = () => ({
  "> ul": {
    listStyle: "none",
    paddingTop: "8px",
    display: "flex",
    "> li": {
      textDecoration: "none",
      color: "#383838",
      cursor: "pointer",
      paddingTop: "4px",
      "@media(max-width: 428px)": {
        textAlign: "center",
      },

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

export const getlistTitleStyle = () => ({
  color: "#6bb4ad",
  typography: "h6",
  fontWeight: "bold",
  "@media(max-width: 428px)": {
    textAlign: "center",
  },
});
