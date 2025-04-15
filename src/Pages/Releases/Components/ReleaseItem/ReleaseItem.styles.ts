export const getReleaseItemStyle = () => ({
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
    "& p": {
      "::after": {
        width: "100%",
      },
    },
  },

  "@media(max-width: 2560px)": {
    width: "400px",
    height: "450px",
  },
  "@media(max-width: 1400px)": {
    width: "250px",
    height: "300px",
  },
});

export const getTitlePriceContainer = () => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const getReleaseItemTitleStyle = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
      fontSize: "20px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
    "@media(max-width: 768px)": {
      fontSize: "16px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
  },
});

export const ReleaseItemPriceStyle = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "> p": {
    "@media(max-width: 2560px)": {
      fontSize: "16px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
    "@media(max-width: 2000px)": {
      fontSize: "16px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
    "@media(max-width: 1400px)": {
      fontSize: "14px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
    "@media(max-width: 768px)": {
      fontSize: "12px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
  },
});
