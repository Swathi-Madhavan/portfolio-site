import React from "react";
import { SkillsProps } from "../model";
import { Box, Button, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";
import LeftArrowIcon from "../assets/Images/UiIcons/LeftArrowIcon";
import RightArrowIcon from "../assets/Images/UiIcons/RightArrowIcon";
import PrimaryButton from "../styledComponents/PrimaryButton";
import ForwardButton from "../styledComponents/ForwardButton";
import FronEndIcon from "../assets/Images/FronEndIcon";

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
          justifyContent: "flex-end",
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
          marginTop: "87px",
        }}
      >
        <PrimaryButton sx={{}}>
          {SkillsDescDataInfo[0].skillsButtons}
        </PrimaryButton>
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
          <ForwardButton>
            <LeftArrowIcon />
          </ForwardButton>

          <Box
            sx={{
              width: "621px",
              height: "629px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "332px",
                height: "332px",
                // margin: "138px 144px 159px 145px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid",
                borderImageSource:
                  "linear-gradient(147.8deg, #FFFFFF 22.87%, rgba(0, 0, 0, 0.65) 95.17%)",
                boxShadow:
                  "6px 6px 12px 0px rgba(0, 0, 0, 0.25),  -6px -6px 12px 0px rgba(255, 255, 255, 0.05)",

                "& .MuiSvgIcon-root": {
                  fontSize: "332px",
                },
              }}
            >
              <FronEndIcon />
            </Box>
          </Box>

          <ForwardButton>
            <RightArrowIcon />
          </ForwardButton>
        </div>
      </div>
    </Box>
  );
}

export default Skills;
