import React from "react";
import { BriefAbtProps } from "../model";
import { Box, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";

function BriefAbtMe({ text, abtPara }: Readonly<BriefAbtProps>) {
  return (
    <Box
      sx={{
        width: "1006px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "154px",
      }}
    >
      <div
        style={{
          width: "422px",
          height: "422px",
        }}
      >
        <img
          src="\GirlImage2.png"
          alt="My Portarit2"
          height="100%"
          width="100%"
        ></img>
      </div>
      <div
        style={{
          width: "456px",
          height: "280px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "left",
          gap: "32px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "34px",
            fontWeight: "500px",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "0.71",
            letterSpacing: "0.38px",
            color: AppColorsData.whiteColor,
          }}
        >
          {text}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "300px",
            fontStretch: "normal",
            fontStyle: "normal",
            color: AppColorsData.whiteColor,
          }}
        >
          {abtPara}
        </Typography>
      </div>
    </Box>
  );
}

export default BriefAbtMe;
