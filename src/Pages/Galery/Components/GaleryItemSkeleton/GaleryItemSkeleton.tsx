import React from "react";
import { Skeleton } from "@mui/material";

const GaleryItemSkeleton = () => {
  return (
    <Skeleton
      height={"2000px"}
      variant="rounded"
      sx={{ borderTopLeftRadius: "16px", borderTopRightRadius: "16px" }}
      animation="wave"
    />
  );
};

export default GaleryItemSkeleton;
