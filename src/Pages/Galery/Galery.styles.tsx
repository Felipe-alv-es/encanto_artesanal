//@ts-ignore
import image from "../../assets/images/Galery/GaleryBG.jpg";

export const getContainerStyle = () => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
  padding: "5% 15%",
  display: "flex",
  justifyContent: "center",
});

export const getGaleryContentStyle = () => ({
  "@media(max-width: 2560px)": {
    display: "flex",
    gap: "16px",
    width: "70%",
  },
  "@media(max-width: 768px)": {
    display: "block",
    gap: "0px",
    width: "100%",
  },
});

export const getMainItemStyle = () => ({
  borderRadius: "16px",
  overflow: "hidden",
  flex: 4,
  "@media(max-width: 2560px)": {
    paddingBottom: "0px",
  },
  "@media(max-width: 768px)": {
    paddingBottom: "16px",
  },
});

export const getSideItemsStyle = () => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flex: 1.95,
  "@media(max-width: 2560px)": {
    height: "100%",
  },
  "@media(max-width: 768px)": {
    height: "fit-content",
    "> div:first-of-type": {
      marginBottom: "16px",
    },
  },
});
