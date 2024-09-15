import { ReactNode } from "react";

export default interface StyledButtonProps {
  text: string;
  variant: "text" | "outlined" | "contained";
  icon?: ReactNode;
}
