import React from "react";
import { Alert, Snackbar } from "@mui/material";

interface WarningSnackbarProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

export const WarningSnackbar = React.forwardRef<
  HTMLDivElement,
  WarningSnackbarProps
>(({ open, setOpen }, ref) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
    >
      <Alert
        severity="info"
        variant="filled"
        sx={{
          "& .MuiAlert-message": {
            fontSize: "16px",
            fontWeight: "300",
            fontFamily: "kanit",
          },
        }}
      >
        {"Ops! Parece que seu carrinho está vazio."}
      </Alert>
    </Snackbar>
  );
});

export default WarningSnackbar;
