export const getContainerStyle = () => ({
  background: "#EAF1EA",
  padding: "5% 10% 5% 10%",
  display: "flex",
  justifyContent: "center",
  "> div": {
    width: "100%",
    maxWidth: "1344px",
    display: "flex",
    justifyContent: "center",
  },
});

export const getTitleStyle = () => ({
  marginBottom: "32px",
  "@media(max-width: 2560px)": {
    typography: "h4",
    fontWeight: "300",
    fontFamily: "kanit",
  },
  "@media(max-width: 768px)": {
    fontSize: "24px",
    fontWeight: "300",
    fontFamily: "kanit",
    textAlign: "center",
  },
});

export const getContentContainerStyle = () => ({
  display: "flex",
  width: "100%",
  "@media(max-width: 2560px)": {
    justifyContent: "space-between",
  },
  "@media(max-width: 768px)": {
    justifyContent: "center",
  },
});
