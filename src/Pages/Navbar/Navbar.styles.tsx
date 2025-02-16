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
    gap: "32px",
    listStyle: "none",
    "> li": {
      "> div": {
        "> div:first-of-type": {
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
          "> button": {
            color: "#F2F2F2",
            fontFamily: "kanit",
            fontSize: "18px",
          },
        },
        "> div:nth-of-type(2)": {
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
          paddingRight: "18px",
          placeItems: "center",
          position: "absolute",
          "> button": {
            color: "#F2F2F2",
            fontFamily: "kanit",
            fontSize: "16px",
            textTransform: "none",
          },
        },
      },
    },
  },
});

export default interface StyledSearchProps {
  text: string;
  icon?: ReactNode;
}
