//@ts-ignore
import image from "../../assets/images/Home/Home.jpg";

export const getContainerStyle = () => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
  padding: "5% 15%",
  display: "flex",
  justifyContent: "center",
});

export const getGaleryContentStyle = () => ({
  display: "flex",
  gap: "24px",
  width: "70%",
  alignItems: "center",
});

export const getMainItemStyle = () => ({
  flex: 4,
  borderRadius: "16px",
  overflow: "hidden",
});

export const getSideItemsStyle = () => ({
  flex: 1.9,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
});
