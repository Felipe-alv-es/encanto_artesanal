import { Box, IconButton, MobileStepper } from "@mui/material";
import React from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { categoriesOptions } from "../../../../assets/Arrays/CategoriesList.tsx";
import CategoryItem from "../CategoryItem/CategoryItem.tsx";
import { useNavigate } from "react-router-dom";

const StyledMobileStepper = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = categoriesOptions.length;

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <Box>
      <Box sx={{ marginBottom: "16px" }}>
        <CategoryItem
          title={categoriesOptions[activeStep].title}
          imageSrc={categoriesOptions[activeStep].imageSrc}
          imageAlt={categoriesOptions[activeStep].imageAlt}
          onClick={() => navigate("/product-page")}
        />
      </Box>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <IconButton
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <FaRegArrowAltCircleRight color="#6bb4ad" />
          </IconButton>
        }
        backButton={
          <IconButton onClick={handleBack} disabled={activeStep === 0}>
            <FaRegArrowAltCircleLeft color="#6bb4ad" />
          </IconButton>
        }
        sx={{
          background: "transparent",
          "& .MuiMobileStepper-dotActive": { background: "#6bb4ad" },
        }}
      />
    </Box>
  );
};

export default StyledMobileStepper;
