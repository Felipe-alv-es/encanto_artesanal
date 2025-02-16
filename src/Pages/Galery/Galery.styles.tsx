import React from "react";
import { Box, Typography } from "@mui/material";
import { StyledButton } from "../../Components/index.ts";
//@ts-ignore
import image from "../../assets/images/Home/Home.jpg";

export const getContainerStyle = (scrollValue: number) => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
  backgroundPosition: `left 0% bottom ${80 + (scrollValue / 10) * 0.08}%`,
  padding: "5% 15% 5% 15%",
  textAlign: "center",
});

export const getOverlayStyle = () => ({
  height: "97.5%",
  width: "100%",
  background: "rgba(0,0,0,0.5)",
  position: "fixed",
  borderRadius: "32px",
  opacity: "0",
  transition: "500ms",
  display: "grid",
  placeItems: "end start",
  ":hover": {
    opacity: "100%",
  },
});

export default interface StyledSwiperItemProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

export const StyledSwiperItem = React.forwardRef<
  HTMLDivElement,
  StyledSwiperItemProps
>(({ title, imgSrc, imgAlt, description, ...props }, ref) => {
  return (
    <Box {...props}>
      <Box className="slide-overlay" sx={getOverlayStyle}>
        <Box
          sx={{
            padding: "16px",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              gap: "16px",
              textAlign: "left",
            }}
          >
            <Typography variant="h5" fontWeight={800} color="#F2F2F2">
              {title}
            </Typography>
            <Typography
              variant="body1"
              fontWeight={300}
              color="#F2F2F2"
              marginBottom={"20px"}
            >
              {description}
            </Typography>
            <StyledButton
              text="Veja mais"
              variant="outlined"
              size="md"
              padding={"8px"}
            />
          </Box>
        </Box>
      </Box>
      <Box
        component="img"
        src={imgSrc}
        alt={imgAlt}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "32px",
          marginBottom: "16px",
        }}
      />
    </Box>
  );
});
