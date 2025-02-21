export const getOverlayStyle = () => ({
  height: "97.5%",
  width: "100%",
  background: "rgba(0,0,0,0.5)",
  position: "fixed",
  borderRadius: "32px",
  opacity: "0",
  transition: "500ms",
  display: "grid",
  placeItems: "end start",
  ":hover": {
    opacity: "100%",
  },
});

export const swiperItemContainerStyle = () => ({
  padding: "16px",
  width: "100%",
});

export const swiperItemTextContainerStyle = () => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  gap: "16px",
  textAlign: "left",
});

export const swiperItemTitleStyle = () => ({
  typography: "h5",
  fontWeight: "800",
  color: "#F2F2F2",
});

export const swiperItemDescriptionStyle = () => ({
  typography: "body1",
  fontWeight: "300",
  color: "#F2F2F2",
  marginBottom: "20px",
});
