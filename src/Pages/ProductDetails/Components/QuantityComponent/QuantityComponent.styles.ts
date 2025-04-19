export const getQuantityComponentContainerStyle = () => ({
  width: "fit-content",
  display: "flex",
  alignItems: "center",
  borderRadius: "16px",
  borderStyle: "solid",
  borderColor: "#383838",
  borderWidth: "1px",
  marginTop: "8px",
  "@media(max-width: 2560px)": {
    padding: "8px",
  },
  "@media(max-width: 1400px)": {
    padding: "4px",
  },
});

export const getQuantityComponentInputStyle = () => ({
  textAlign: "center",
  mx: 1,
  width: "20px",
});

export const getQuantityTitleStyle = () => ({
  "@media(max-width: 2560px)": {
    fontSize: "16px",
  },
  "@media(max-width: 1400px)": {
    fontSize: "14px",
  },
});
