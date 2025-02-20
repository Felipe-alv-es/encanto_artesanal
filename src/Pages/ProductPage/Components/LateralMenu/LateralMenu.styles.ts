export const menuContainerStyle = (scrollValue: number) => ({
  transition: "0.7s",
  position: "relative",
  width: scrollValue === 0 ? "290px" : "90px",
  marginLeft: scrollValue === 0 ? "0px" : "76px",
});

export const menuListBoxStyle = (scrollValue: number) => ({
  position: scrollValue === 0 ? "relative" : "fixed",
  transform: scrollValue === 0 ? "translateY(-68px)" : "translateY(-200px)",
  transition: "1s",
});

export const menuItemContainerStyle = (
  ExpansionWidth: number,
  scrollValue: number
) => ({
  display: "flex",
  alignItems: "center",
  padding: "16px",
  background: "#f2f2f2",
  transition: "width 0.5s ease, transform 0.5s ease",
  width: scrollValue === 0 ? ExpansionWidth : "64px",
  height: "64px",
  overflow: "hidden",
  borderRadius: "64px",
  marginTop: "8px",
  borderStyle: "none",
  "&:hover": {
    width: ExpansionWidth,
    transform: scrollValue === 0 ? "" : `translateX(-${ExpansionWidth - 64}px)`,
  },
});

export const menuItemTitleStyle = () => ({
  fontWeight: "700",
  whiteSpace: "nowrap",
  marginLeft: "16px",
  fontSize: 20,
});
