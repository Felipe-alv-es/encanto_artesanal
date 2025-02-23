//@ts-ignore
import image from "../../assets/images/Home/Home.jpg";

export const getContainerStyle = (scrollValue: number) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
  height: "100vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: `right 0% bottom ${40 + (scrollValue / 2) * 0.2}%`,
  display: "grid",
  placeItems: "end start",
});

export const getDescriptionStyle = () => ({
  marginTop: "32px",
  marginBottom: "32px",
  color: "#F2F2F2",
  typography: "body1",
});
