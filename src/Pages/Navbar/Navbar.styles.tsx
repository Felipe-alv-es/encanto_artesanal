import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

export const getContainerStyle = () => ({
  display: "flex",
  padding: "16px 5% 16px 5%",
  width: "100%",
  position: "absolute",
  zIndex: 1,
  transition: "1s",
});

export const getMenuStyle = () => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  fontWeight: "400",
  "> ul": {
    display: "flex",
    listStyle: "none",
    color: "#F2F2F2",
    gap: "32px",
    "> div": {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      "> li": {
        padding: "8px",
        fontSize: "20px",
        "::after": {
          content: '""',
          width: "0px",
          height: "1px",
          display: "block",
          background: "#F2F2F2",
          transition: "300ms",
        },
        ":hover::after": {
          width: "100%",
        },
      },
    },
  },
});

export default interface StyledSearchProps {
  text: string;
  icon?: ReactNode;
}
