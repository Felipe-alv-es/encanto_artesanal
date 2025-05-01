import React from "react";
import { Skeleton, useMediaQuery } from "@mui/material";
import {} from "../../ProductPage.styles.ts";

const ProductPageSkeleton = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Skeleton
        variant="rounded"
        width={isMobile ? 170 : 250}
        height={isMobile ? 300 : 400}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={isMobile ? 170 : 250}
        height={isMobile ? 300 : 400}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={isMobile ? 170 : 250}
        height={isMobile ? 300 : 400}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={isMobile ? 170 : 250}
        height={isMobile ? 300 : 400}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={isMobile ? 170 : 250}
        height={isMobile ? 300 : 400}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={isMobile ? 170 : 250}
        height={isMobile ? 300 : 400}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={isMobile ? 170 : 250}
        height={isMobile ? 300 : 400}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
      <Skeleton
        variant="rounded"
        width={isMobile ? 170 : 250}
        height={isMobile ? 300 : 400}
        sx={{ borderRadius: "32px" }}
        animation="wave"
      />
    </>
  );
};

export default ProductPageSkeleton;
