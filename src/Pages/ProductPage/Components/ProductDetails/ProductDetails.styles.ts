export const productDetailContainerStyle = () => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 3,
});

export const productDetailPaperStyle = () => ({
  width: "75%",
  position: "relative",
  padding: "64px 32px 64px 32px",
  zIndex: 3,
  borderRadius: "16px",
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: 8,
});

export const productDetailImageContainer = () => ({
  display: "flex",
  gap: 4,
  "> div:first-of-type": {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    "> img": {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "8px",
      cursor: "pointer",
    },
  },
  "> div:nth-of-type(2) ": {
    width: "600px",
    height: "600px",
    display: "flex",
    overflow: "hidden",
    "> img": {
      objectFit: "cover",
      borderRadius: "16px",
      width: "100%",
      cursor: "pointer",
      marginBottom: 1,
    },
  },
});

export const productDetailsSiteMenuContainer = () => ({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});
