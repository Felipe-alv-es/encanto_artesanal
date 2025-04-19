export const getMainImageStyle = () => ({
  overflow: "hidden",
  display: "flex",
  "> img": {
    width: "100%",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  "@media(max-width: 2560px)": {
    width: 600,
    height: 600,
  },
  "@media(max-width: 1400px)": {
    width: 400,
    height: 400,
  },
  "@media(max-width: 768px)": {
    width: 400,
    height: 400,
  },
});
