import React from "react";
import { Box, Pagination, useMediaQuery } from "@mui/material";
import { getPaginationContainerStyle } from "./ProductPagePagination.styles.ts";

interface ProductPagePaginationProps {
  totalPages: number;
  currentPageNumber: number;
  setCurrentPageNumber: (value: React.SetStateAction<number>) => void;
}

export const ProductPagePagination = React.forwardRef<
  HTMLLIElement,
  ProductPagePaginationProps
>(({ totalPages, currentPageNumber, setCurrentPageNumber }, ref) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={getPaginationContainerStyle}>
      <Pagination
        count={totalPages}
        page={currentPageNumber}
        onChange={(event, value) => setCurrentPageNumber(value)}
        color="primary"
        size="large"
        siblingCount={isMobile ? 0 : 1}
      />
    </Box>
  );
});

export default ProductPagePagination;
