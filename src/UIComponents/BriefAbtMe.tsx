import React from "react";
import { BriefAbtProps } from "../model";
import { Box, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";
import AboutGirlIcon from "../assets/Images/AboutGirl";

function BriefAbtMe({ text, abtPara }: Readonly<BriefAbtProps>) {
  return (
    <section id="about-me">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "154px",
        }}
      >
        <Box
          style={{
            width: "429px",
            height: "438px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "29px",
              overflow: "hidden",
              boxShadow:
                "25px 25px 60px 0px rgba(0, 0, 0, 0.25), -25px -25px 60px 0px rgba(255, 255, 255, 0.05)",
              background:
                "linear-gradient(320.11deg, #2F3339 14.78%, #15181C 95.73%)",
              "& .MuiSvgIcon-root": {
                fontSize: "422px",
              },
            }}
          >
            <AboutGirlIcon />
          </Box>
        </Box>
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
              fontFamily: "Poppins",
              color: AppColorsData.whiteColor,
            }}
          >
            {abtPara}
          </Typography>
        </div>
      </Box>
    </section>
  );
}

export default BriefAbtMe;
