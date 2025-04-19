export const getProductItemContainerStyle = () => ({
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
    width: "250px",
    height: "400px",
  },
  "@media(max-width: 1400px)": {
    width: "200px",
    height: "350px",
  },
  "@media(max-width: 768px)": {
    width: "170px",
    height: "300px",
  },
});

export const getProductItemTitleStyle = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "8px",
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
      fontWeight: "300",
      fontFamily: "kanit",
      fontSize: "18px",
    },
    "@media(max-width: 1400px)": {
      fontWeight: "300",
      fontFamily: "kanit",
      fontSize: "14px",
    },
  },
});

export const getProductItemPriceStyle = () => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "16px",
  "> p": {
    "@media(max-width: 2560px)": {
      fontSize: "16px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
    "@media(max-width: 1400px)": {
      fontSize: "12px",
      fontWeight: "300",
      fontFamily: "kanit",
    },
  },
});
