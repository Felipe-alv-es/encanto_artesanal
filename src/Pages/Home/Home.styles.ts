//@ts-ignore
import image from "../../assets/images/Home/Home.jpg";

export const getPageContainerStyle = (scrollValue: number) => ({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
  backgroundSize: "150%",
  backgroundPosition: `right 100% bottom ${40 + (scrollValue / 8) * 0.2}%`,
});

export const getContentContainerStyle = () => ({
  maxWidth: "1344px",
  height: "100%",
  display: "grid",
  placeItems: "center start",
  "@media(max-width: 2560px)": {
    marginTop: "115px",
  },
  "@media(max-width: 1400px)": {
    marginTop: "80px",
  },
});

export const getContentStyle = () => ({
  padding: "64px",
  "@media(max-width: 2560px)": {
    width: "50%",
  },
  "@media(max-width: 1400px)": {
    width: "40%",
  },
});

export const getTitleStyle = () => ({
  color: "#F2F2F2",
  "@media(max-width: 2560px)": {
    typography: "h3",
  },
  "@media(max-width: 1400px)": {
    typography: "h4",
  },
});

export const getDescriptionStyle = () => ({
  marginTop: "32px",
  marginBottom: "32px",
  color: "#F2F2F2",
  typography: "body1",
});
