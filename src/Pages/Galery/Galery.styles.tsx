//@ts-ignore
import image from "../../assets/images/Home/Home.jpg";

export const getContainerStyle = (scrollValue: number) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
  padding: "5% 15% 5% 15%",
  textAlign: "center",
});
