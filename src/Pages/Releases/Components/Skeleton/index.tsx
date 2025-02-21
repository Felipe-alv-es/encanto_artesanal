import React from "react";
import { Box, Skeleton } from "@mui/material";

const ItemSkeletonComponent = () => {
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
        width={300}
        height={450}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
      <Skeleton variant="rounded" width={250} height={30} animation="wave" />
      <Skeleton variant="rounded" width={300} height={10} animation="wave" />
      <Skeleton variant="rounded" width={250} height={10} animation="wave" />
      <Skeleton variant="rounded" width={280} height={10} animation="wave" />
    </Box>
  );
};

const ReleasesSkeleton = () => {
  return (
    <Box sx={{ background: "#F2F2F2", padding: "64px 0px 64px 0px" }}>
      <Box sx={{ placeItems: "center" }}>
        <Skeleton variant="rounded" width={610} height={50} />
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: "64px",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "repeat(4, auto)",
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
    </Box>
  );
};

export default ReleasesSkeleton;
