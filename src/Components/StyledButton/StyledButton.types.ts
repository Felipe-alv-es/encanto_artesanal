import { ReactNode } from "react";

export default interface StyledButtonProps {
  text: string;
  variant: "text" | "outlined" | "contained";
  size?: "sm" | "md" | "bg";
  icon?: ReactNode;
  isWhiteBg?: boolean;
}
