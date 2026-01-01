import { Box, Typography } from "@mui/material";
import { RiEmotionSadLine } from "react-icons/ri";

export const getPageTitleStyle = () => ({
  textAlign: "center",
  color: "#fafafa",
  "@media(max-width: 2560px)": {
    fontSize: "48px",
    fontWeight: "bold",
    fontFamily: "kanit",
  },
  "@media(max-width: 768px)": {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "kanit",
  },
});

export const getDescriptionStyle = () => ({
  textAlign: "center",
  color: "#fafafa",
  paddingBottom: "16px",
  "@media(max-width: 2560px)": {
    fontSize: "24px",
    fontFamily: "kanit",
  },
  "@media(max-width: 768px)": {
    fontSize: "16px",
    fontFamily: "kanit",
  },
});

const BadRequest = () => {
  return (
    <Box
      sx={{
        background: "#6bb4ad",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", placeItems: "center" }}
      >
        <Typography sx={getPageTitleStyle}>Pagina não encontrada </Typography>
        <Typography sx={getDescriptionStyle}>
          A pagina acessada não existe ou está quebrada. Clique aqui para ser
          redirecionado{" "}
        </Typography>
        <RiEmotionSadLine size={100} color="#fafafa" />
      </Box>
    </Box>
  );
};

export default BadRequest;
