// Steppers.js
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  {
    label: "Personal Information",
  },
  {
    label: "Educational Background",
  },
  {
    label: "Apprenticeship Knowledge & Experience",
  },
  {
    label: "Interests and Goals",
  },
  {
    label: "Support and Resources",
  },
  {
    label: "Engagement and Feedback",
  },
  {
    label: "Consent and Agreement",
  },
];

function Steppers({ activeStep }) {
  return (
    <>
      <div>
        <div className="md:w-1/2 w-full mx-auto md:ml-auto pt-36">
          <h6 className="font-displace text-[30px] text-gray-600 pb-5 text-center md:text-start">
            Steps
          </h6>
        </div>
        <hr />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "30px 0",
          }}
        >
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </>
  );
}

export default Steppers;