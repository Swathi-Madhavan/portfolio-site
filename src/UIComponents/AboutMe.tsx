import { Box, Typography } from "@mui/material";
import React from "react";
import { AboutMeProps } from "../model";
import { AppColorsData } from "../themes/ColoPallets";
import PrimaryButton from "../styledComponents/PrimaryButton";
import { getURLMapping } from "../utils/common";

function AboutMe({
  AbtMeButtons,
  AbtMeTxt,
  greet,
  profession,
  intro,
}: Readonly<AboutMeProps>) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "55px auto auto auto",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "38px",
          fontWeight: "400",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "24px",
          letterSpacing: "0.38px",
          textAlign: "center",
          textTransform: "none",
          color: AppColorsData.whiteColor,
        }}
      >
        {greet}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "62px",
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "0.38px",
          textAlign: "center",
          textTransform: "none",
          marginTop: "64px",
          color: AppColorsData.whiteColor,
        }}
      >
        {intro}
      </Typography>
      <Typography 
        sx={{
          fontFamily: "Poppins",
          fontSize: "38px",
          fontWeight: "500",
          lineHeight: "52px",
          letterSpacing: "0.38px",
          textAlign: "center",
          marginTop: "8px",
          color: AppColorsData.whiteColor,
          animation: "typing 2s steps(18), cursor .4s step-end infinite alternate"
          
        }}
      >
        {profession}
      </Typography>
      <div
        style={{
          width: "100%",
          height: "145px",
          marginTop: "28px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "21px",
            fontWeight: "300",
            lineHeight: "28px",
            letterSpacing: "0.38px",
            textAlign: "center",
            color: AppColorsData.whiteColor,
          }}
        >
          {AbtMeTxt}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
          gap: "76px",
        }}
      >
        {AbtMeButtons.map((item, index) => (
          <a href={getURLMapping[item]} key={item}>
            <PrimaryButton>{item}</PrimaryButton>
          </a>
        ))}
      </div>
    </Box>
  );
}

export default AboutMe;
