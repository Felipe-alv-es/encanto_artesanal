import React from "react";
import { Box, Typography } from "@mui/material";
import { getGridStyle, getPageTitleStyle } from "./Releases.styles.ts";
import ReleaseItem from "./Components/ReleaseItem/index.tsx";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";
import ReleasesSkeleton from "./Components/Skeleton/index.tsx";

const Releases = () => {
  const { apiData, isLoading } = useApiData();

  if (isLoading) {
    return <ReleasesSkeleton />;
  }

  return (
    <Box sx={{ background: "#F2F2F2", padding: "32px 0px 32px 0px" }}>
      <Typography sx={getPageTitleStyle}>Conheça nossas novidades</Typography>
      <Box sx={getGridStyle}>
        {apiData &&
          apiData.data
            .slice(0, 8)
            .map((item) => (
              <ReleaseItem
                key={item.id}
                imageSrc={item.imagesrc}
                imageAlt={item.imagealt}
                title={item.title}
                description={item.description}
              />
            ))}
      </Box>
    </Box>
  );
};

export default Releases;
