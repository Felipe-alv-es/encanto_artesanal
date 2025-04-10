export const getContainerStyle = (showHeader: boolean) => ({
  width: "100%",
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  background: "#f2f2f2",
  transform: showHeader ? "translateY(0)" : "translateY(-100%)",
  transition: "transform 0.3s ease-in-out",
});

export const getContentContainerStyle = () => ({
  maxWidth: "1344px",
  display: "flex",
  alignItems: "center",
  paddingY: "16px",
});

export const getListStyle = () => ({
  display: "flex",
  gap: "16px",
});

export const getListItemStyle = () => ({
  "::after": {
    content: '""',
    width: "0px",
    height: "1px",
    display: "block",
    background: "#383838",
    transition: "300ms",
  },
  ":hover::after": {
    width: "100%",
  },
  "> button": {
    color: "#383838",
    fontFamily: "kanit",
    fontSize: "18px",
    fontWeight: "300",
    ":hover": {
      background: "transparent",
    },
  },
});
