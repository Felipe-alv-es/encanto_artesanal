export const getSideImagesStyle = () => ({
  display: "flex",
  flexDirection: "column",
  gap: 1,
  "> img": {
    width: 145,
    height: 145,
    objectFit: "cover",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
});
