import React from "react";
import { ExperienceProps } from "../model";
import { Box, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";
import Divider from "../styledComponents/Divider";

function Experience({
  experienceTxt,
  experienceButtons,
  workExperience,
}: Readonly<ExperienceProps>) {
  return (
    <Box
      sx={{
        width: "915px",
        display: "display",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "154px auto auto auto",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "34px",
          fontWeight: "500",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "0.71",
          letterSpacing: "0.38px",
          color: AppColorsData.whiteColor,
          textAlign: "left",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {experienceTxt}
      </Typography>
      <Divider />
    </Box>
  );
}

export default Experience;
