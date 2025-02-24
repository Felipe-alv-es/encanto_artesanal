import React from "react";
import { Box, Button, Typography } from "@mui/material";

interface ProductItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const ProductItem = React.forwardRef<HTMLLIElement, ProductItemProps>(
  ({ title, description, imageSrc }, ref) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "16px 16px 32px 16px",
          width: "335px",
          height: "616px",
          borderRadius: "16px",
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 3px 0px",
          background: "#f2f2f2",
          placeItems: "center",
        }}
        ref={ref}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              height: "360px",
              width: "300px",
              overflow: "hidden",
              borderRadius: "32px",
            }}
          >
            <Box
              component="img"
              src={imageSrc}
              alt={"imageAlt"}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ padding: "16px 16px 0px 16px" }}>
            <Typography
              sx={{
                typography: "h5",
                fontWeight: "900",
                paddingBottom: "8px",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            sx={{
              textTransform: "none",
              fontSize: 16,
              marginTop: "20px",
              fontWeight: "500",
            }}
          >
            Veja mais
          </Button>
        </Box>
      </Box>
    );
  }
);

export default ProductItem;
