export const getContainerStyle = () => ({
  display: "flex",
  background: "#EAF1EA",
  justifyContent: "center",
  "> div": {
    width: "100%",
    "@media(max-width: 2560px)": {
      maxWidth: "1344px",
    },
    "@media(max-width: 1400px)": {
      maxWidth: "900px",
    },
  },
});

export const productPageGridStyle = () => ({
  display: "grid",
  gap: "32px",
  justifyContent: "center",
  alignItems: "center",
  paddingY: "64px",
  "@media(max-width: 2560px)": {
    gridTemplateColumns: "repeat(4, auto)",
  },
  "@media(max-width: 768px)": {
    gridTemplateColumns: "repeat(2, auto)",
  },
});
