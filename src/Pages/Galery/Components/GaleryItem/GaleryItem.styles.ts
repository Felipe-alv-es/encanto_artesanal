export const getItemContainer = () => ({
  cursor: "pointer",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  aspectRatio: "1 / 1",
  width: "100%",
  ":hover": {
    "& img": {
      transform: "scale(1.05)",
    },
    "& p": {
      "::after": {
        width: "100%",
      },
    },
  },
});

export const GaleryTitleStyle = () => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
  "> p": {
    "::after": {
      content: '""',
      width: "0px",
      height: "1px",
      display: "block",
      background: "#383838",
      transition: "300ms",
    },
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
