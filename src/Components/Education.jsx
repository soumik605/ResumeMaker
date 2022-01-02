import {
  Step,
  StepContent,
  Stepper,
  Typography,
  StepLabel,
  Button,
  Box,
} from "@mui/material";
import React from "react";

const Education = () => {

  const steps = [
    {
      label: "Select campaign settings",
      description: "For each ad campaign that.",
    },
    {
      label: "Create an ad group",
      description: "An ad group contains one or more ads .",
    },
    {
      label: "Create an ad",
      description: "lorem For each ad campaign that you create,",
    },
  ];

  return (
    <>
    <Typography variant="h6" sx={{color: "primary.main"}}>Education</Typography>
    <Stepper activeStep={-1} orientation="vertical" >
      {steps.map((step, index) => (
        <Step key={step.label} active={true}>
          <StepLabel
            optional={<Typography variant="caption">2018-2022</Typography>}
          >
            {step.label}
          </StepLabel>
          <StepContent>
            <Typography variant="p">{step.description}</Typography>
          </StepContent>
        </Step>
      ))}
    </Stepper>
    </>
  );
};

export default Education;
