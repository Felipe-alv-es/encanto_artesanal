import React from "react";
import { Box, Typography } from "@mui/material";
import {
  getGridItemStyle,
  getGridItemTitleStyle,
  getGridStyle,
  getPageTitleStyle,
} from "./Releases.styles.ts";
import { releaseList } from "../../assets/Arrays/ReleasesList.tsx";

const Releases = () => {
  return (
    <Box sx={{ background: "#F2F2F2" }}>
      <Typography sx={getPageTitleStyle}>Conheça nossas novidades</Typography>
      <Box sx={getGridStyle}>
        {releaseList.map((item) => (
          <Box sx={getGridItemStyle}>
            <Box component="img" src={item.imageSrc} alt={item.imageAlt} />
            <Box>
              <Typography sx={getGridItemTitleStyle}>{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Releases;
