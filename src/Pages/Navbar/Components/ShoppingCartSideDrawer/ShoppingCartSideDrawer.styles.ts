export const getCartSideDrawerContainerStyle = () => ({
  paddingTop: "120px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  gap: 3,
  "@media(max-width: 2560px)": {
    width: "500px",
    paddingX: "32px",
  },
  "@media(max-width: 768px)": {
    width: "100vw",
    paddingX: "16px",
  },
});

export const getCartSideDrawerTitleStyle = () => ({
  fontSize: "24px",
  fontWeight: "400",
  fontFamily: "kanit",
  paddingX: "4px",
  color: "#383838",
});
