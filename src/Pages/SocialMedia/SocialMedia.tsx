import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const getPageTitleStyle = () => ({
  textAlign: "center",
  color: "#fafafa",
  "@media(max-width: 2560px)": {
    fontSize: "48px",
    fontWeight: "bold",
    fontFamily: "kanit",
    paddingBottom: "32px",
  },
  "@media(max-width: 768px)": {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "kanit",
    paddingBottom: "8px",
  },
});

const HtmlComponent = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/instagramEmbed/instagramEmbed.html")
      .then((response) => response.text())
      .then((data) => setHtmlContent(data));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const SocialMedia = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        background: "#6bb4ad",
        placeItems: "center",
        "@media(max-width: 2560px)": {
          padding: "64px",
        },
        "@media(max-width: 768px)": {
          padding: "32px 8px 16px 8px",
        },
      }}
    >
      <Typography sx={getPageTitleStyle}>
        Acompanhe nossas redes sociais
      </Typography>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <HtmlComponent />
      </Box>
    </Box>
  );
};

export default SocialMedia;
