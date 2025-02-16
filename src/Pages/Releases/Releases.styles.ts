export const getPageTitleStyle = () => ({
  textAlign: "center",
  paddingTop: "32px",
  typography: "h3",
  fontWeight: "bold",
});

export const getGridStyle = () => ({
  display: "grid",
  gap: "32px",
  justifyContent: "center",
  alignItems: "center",
  gridTemplateColumns: "repeat(4, auto)",
  padding: "32px",
  textAlign: "center",
});

export const getGridItemStyle = () => ({
  width: "350px",
  height: "700px",
  borderRadius: "32px",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  "> img": {
    width: "100%",
    borderRadius: "16px",
  },
});

export const getGridItemTitleStyle = () => ({
  typography: "h6",
  fontWeight: "bold",
  padding: "16px 0px 4px 0px",
});
