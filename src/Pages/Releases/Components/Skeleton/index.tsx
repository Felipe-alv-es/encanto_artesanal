import React from "react";
import { Box, Skeleton, useMediaQuery } from "@mui/material";

const ItemSkeletonComponent = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      sx={{
        placeItems: "center",
        gap: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Skeleton
        variant="rounded"
        width={isMobile ? 250 : 400}
        height={isMobile ? 240 : 450}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
    </Box>
  );
};

const ReleasesSkeleton = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={{ background: "#F2F2F2", padding: "64px 0px 64px 0px" }}>
      <Box sx={{ placeItems: "center" }}>
        <Skeleton
          variant="rounded"
          width={isMobile ? 290 : 610}
          height={isMobile ? 36 : 50}
        />
      </Box>
      {isMobile ? (
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            paddingY: "32px",
          }}
        >
          <Skeleton
            variant="rounded"
            width={isMobile ? 250 : 400}
            height={isMobile ? 240 : 450}
            sx={{ borderRadius: "32px" }}
            animation="wave"
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gap: "64px",
            justifyContent: "center",
            alignItems: "center",
            gridTemplateColumns: "repeat(3, auto)",
            padding: "32px",
            textAlign: "center",
          }}
        >
          <ItemSkeletonComponent />
          <ItemSkeletonComponent />
          <ItemSkeletonComponent />
          <ItemSkeletonComponent />
          <ItemSkeletonComponent />
          <ItemSkeletonComponent />
          <ItemSkeletonComponent />
          <ItemSkeletonComponent />
        </Box>
      )}
    </Box>
  );
};

export default ReleasesSkeleton;
