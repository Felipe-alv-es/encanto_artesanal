import React from "react";
import { Box, Typography } from "@mui/material";
import { getGridStyle, getPageTitleStyle } from "./Releases.styles.ts";
import { releaseList } from "../../assets/Arrays/ReleasesList.tsx";
import ReleaseItem from "./Components/ReleaseItem/index.tsx";

const Releases = () => {
  return (
    <Box sx={{ background: "#F2F2F2" }}>
      <Typography sx={getPageTitleStyle}>Conheça nossas novidades</Typography>
      <Box sx={getGridStyle}>
        {releaseList.map((item) => (
          <ReleaseItem
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            description={item.description}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Releases;
