import background from "../../assets/images/ProductPage/background.jpg";

export const productPageContainerStyle = () => ({
  backgroundImage: `url('${background}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  animation: "backgroundMove 300s linear infinite",
  placeItems: "center",
  padding: "16px",

  "@keyframes backgroundMove": {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
});

export const productPageGridStyle = () => ({
  display: "grid",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
  gridTemplateColumns: "repeat(4, auto)",
});
