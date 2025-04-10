export const getContainerStyle = () => ({
  background: "#f2f7f2",
  padding: "5% 10% 5% 10%",
  display: "flex",
  justifyContent: "center",
  gap: "32px",
});

export const getContentContainerStyle = () => ({
  maxWidth: "1344px",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});

export const getItemContainer = () => ({
  cursor: "pointer",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  ":hover": {
    "& img": {
      transform: "scale(1.05)",
    },
  },

  "@media(max-width: 2560px)": {
    width: "300px",
    height: "350px",
  },
  "@media(max-width: 1400px)": {
    width: "250px",
    height: "300px",
  },
});

export const CategoriesTitleStyle = () => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  "> p": {
    "@media(max-width: 2560px)": {
      typography: "h5",
      fontWeight: "300",
      fontFamily: "kanit",
    },
    "@media(max-width: 1400px)": {
      typography: "h6",
      fontWeight: "300",
      fontFamily: "kanit",
    },
  },
});
