import React from "react";
import { SkillsProps } from "../model";
import { Box, Button, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";
import LeftArrowIcon from "../assets/Images/UiIcons/LeftArrowIcon";
import RightArrowIcon from "../assets/Images/UiIcons/RightArrowIcon";

function Skills({ SkillsTxt, SkillsDescDataInfo }: SkillsProps) {
  return (
    <Box
      sx={{
        width: "915px",
        display: "display",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "164px auto auto auto",
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
          justifyContent: "flex-end"
        }}
      >
        {SkillsTxt}
      </Typography>
      <div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#7733ff",
          marginTop: "31px",
        }}
      ></div>
      <div
        style={{
          width: "915px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "87px"
        }}
      >
        <Button
          sx={{
            width: "253px",
            height: "56px",
            borderRadius: "24px",
            boxShadow:
              "10px 10px 20px 0 rgba(0, 0, 0, 0.25), -10px -10px 20px 0 rgba(255, 255, 255, 0.25)",
            backgroundColor: AppColorsData.secondaryDarkColor,
            color: AppColorsData.whiteColor,
            padding: "16px 16.2px 16px 17.2px",
            fontFamily: "Poppins",
            fontSize: "22px",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.09",
            letterSpacing: "0.38px",
            textAlign: "center",
            textTransform: "none"
          }}
        >
          {SkillsDescDataInfo[0].skillsButtons}
        </Button>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "70px",
          }}
        >
          <LeftArrowIcon
            sx={{
              fontSize: "80px",
            }}
          />

          <Box
            sx={{
              width: "332px",
              height: "332px",
              margin: "138px 144px 159px 145px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={SkillsDescDataInfo[0].skillsImg}
              alt="Front end not found"
              height="100%"
              width="100%"
            />
          </Box>

          <RightArrowIcon
            sx={{
              fontSize: "80px",
            }}
          />
        </div>
      </div>
    </Box>
  );
}

export default Skills;
