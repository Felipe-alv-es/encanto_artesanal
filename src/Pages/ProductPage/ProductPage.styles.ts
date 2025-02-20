export const productPageContainerStyle = () => ({
  placeItems: "center",
  background: "linear-gradient(120deg, #6bb4ad, #6bb4ad, #b8dcd8, #f2f2f2)",
  paddingBottom: "64px",
  "> div:nth-of-type(2)": {
    paddingTop: "150px",
  },
});

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
