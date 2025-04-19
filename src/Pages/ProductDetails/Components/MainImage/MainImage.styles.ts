export const getMainImageStyle = () => ({
  width: 600,
  height: 600,
  overflow: "hidden",
  display: "flex",
  "> img": {
    width: "100%",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
});
