export const navbarCustomize = () => ({
  width: "100%",
  "> div > div > h4": {
    fontSize: 50,
  },
});

export const centralPageContainerStyle = () => ({
  display: "flex",
  gap: 4,
});

export const productPageGridStyle = () => ({
  display: "grid",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
  gridTemplateColumns: "repeat(4, auto)",
});
