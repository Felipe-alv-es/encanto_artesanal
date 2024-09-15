import { SxProps } from "@mui/material/";

export const getContainerStyles = (): SxProps => ({
  background: "#1c1c1c",
  borderStyle: "solid",
  borderColor: "#146ef5",
  borderWidth: "5px 0px 0px 0px",
  padding: "3% 25% 3% 25%",
  "@media(max-width: 1700px)": {
    padding: "3% 20% 3% 20%",
  },
  "@media(max-width: 544px)": {
    padding: "32px 16px 16px 16px",
  },
});

export const getFooterMenuStyle = (): SxProps => ({
  display: "flex",
  justifyContent: "space-between",
  "@media(max-width: 544px)": {
    flexDirection: "column",
    padding: "32px",
    placeItems: "center",
  },
});

export const getTitleStyle = () => ({
  textAlign: "center",
  marginBottom: "16px",
  color: "#e7e7e7",
  typography: "h4",
  fontFamily: "kanit",
});

export const getSubtitleStyle = () => ({
  fontWeight: "normal",
  textAlign: "center",
  marginBottom: "32px",
  color: "#e7e7e7",
  typography: "body1",
});

export const getListStyle = (): SxProps => ({
  "> ul": {
    listStyle: "none",
    "> li": {
      margin: "16px 0px 16px 0px",
      textDecoration: "none",
      color: "white",
      cursor: "pointer",
      "@media(max-width: 428px)": {
        textAlign: "center",
      },

      "> *": {
        textDecoration: "none",
        color: "white",
        cursor: "pointer",
      },
    },
  },
});

export const getlistTitleStyle = (): SxProps => ({
  color: "#089cd4",
  typography: "h6",
  fontWeight: "bold",
  marginBottom: "16px",
  padding: "32px 0px 0px 0px",
  "@media(max-width: 428px)": {
    textAlign: "center",
  },
});
