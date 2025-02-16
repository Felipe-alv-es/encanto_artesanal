import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export const getPageTitleStyle = () => ({
  textAlign: "center",
  paddingBottom: "32px",
  typography: "h3",
  fontWeight: "bold",
  color: "#fafafa",
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
        padding: "32px",
        textAlign: "center",
        background: "#6bb4ad",
        placeItems: "center",
        borderStyle: "solid",
        borderColor: "#528B85",
        borderWidth: "0px 0px 5px 0px",
      }}
    >
      <Typography sx={getPageTitleStyle}>Veja nosso Instagram</Typography>
      <Box sx={{ width: "100%", marginLeft: "16px" }}>
        <HtmlComponent />
      </Box>
    </Box>
  );
};

export default SocialMedia;
