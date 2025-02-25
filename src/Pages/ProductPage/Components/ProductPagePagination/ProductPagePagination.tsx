import React from "react";
import { Box, Pagination } from "@mui/material";

interface ProductPagePaginationProps {
  totalPages: number;
  currentPageNumber: number;
  setCurrentPageNumber: (value: React.SetStateAction<number>) => void;
}

export const ProductPagePagination = React.forwardRef<
  HTMLLIElement,
  ProductPagePaginationProps
>(({ totalPages, currentPageNumber, setCurrentPageNumber }, ref) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "32px",
      }}
    >
      <Pagination
        count={totalPages}
        page={currentPageNumber}
        onChange={(event, value) => setCurrentPageNumber(value)}
        color="primary"
        size="large"
      />
    </Box>
  );
});

export default ProductPagePagination;
