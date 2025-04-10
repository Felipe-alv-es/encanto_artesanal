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

export const GaleryTitleStyle = (isPrincipal?: boolean) => ({
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
      fontSize: isPrincipal ? "28px" : "24px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
    "@media(max-width: 1400px)": {
      fontSize: isPrincipal ? "20px" : "16px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
  },
});

export const GaleryPriceStyle = (isPrincipal?: boolean) => ({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "> p": {
    "@media(max-width: 2560px)": {
      fontSize: isPrincipal ? "24px" : "20px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
    "@media(max-width: 1400px)": {
      fontSize: isPrincipal ? "16px" : "12px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
  },
});
