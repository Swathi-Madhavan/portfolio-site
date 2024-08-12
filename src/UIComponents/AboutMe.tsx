import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { AboutMeProps } from "../model";
import { AppColorsData } from "../themes/ColoPallets";

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
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "0.63",
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
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "0.63",
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
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "1.37",
          letterSpacing: "0.38px",
          textAlign: "center",
          marginTop: "8px",
          color: AppColorsData.whiteColor,
        }}
      >
        {profession}
      </Typography>
      <div
        style={{
          width: "695px",
          height: "145px",
          marginTop: "28px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "21px",
            fontWeight: "300",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.33",
            letterSpacing: "0.38px",
            textAlign: "center",
            color: AppColorsData.whiteColor,
          }}
        >
          {AbtMeTxt}
        </Typography>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "30px",
        gap: "76px"
      }}>
        {AbtMeButtons.map((item, index) => <Button key={item} sx={{
            width: "148px",
            height: "60px",
            padding: "18px 27px 18px 28px",
            borderRadius: "24px",
            boxShadow:
              "5px 5px 10px 0 rgba(0, 0, 0, 0.25), -5px -5px 10px 0 rgba(255, 255, 255, 0.25)",
            backgroundColor: AppColorsData.secondaryDarkColor,
            color: AppColorsData.whiteColor,
            fontFamily: "Poppins",
            fontSize: "22px",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.09",
            letterSpacing: "0.38px",
            textAlign: "center",
            textTransform: "none"

        }}>
            {item}
        </Button>)}
      </div>
    </Box>
  );
}

export default AboutMe;
