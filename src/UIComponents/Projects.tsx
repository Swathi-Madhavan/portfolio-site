import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ProjectsProps } from "../model";
import { AppColorsData } from "../themes/ColoPallets";

function Projects({
  project,
  projButtons,
  projectDataInfo,
}: Readonly<ProjectsProps>) {
  return (
    <Box
      sx={{
        width: "915px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        margin: "180px auto auto auto",
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
        }}
      >
        {project}
      </Typography>
      <div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#7733ff",
          marginTop: "31px"
        }}
      ></div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "71px",
          gap: "78px"
        }}
      >
        {projButtons.map((item, index) => (
          <Button
            sx={{
              width: "253.4px",
              height: "56px",
              padding: "16px 16.2px 16px 17.2px",
              borderRadius: "24px",
              boxShadow:
                "10px 10px 20px 0 rgba(0, 0, 0, 0.25), -10px -10px 20px 0 rgba(255, 255, 255, 0.25)",
              color: AppColorsData.whiteColor,
              fontFamily: "Poppins",
              fontSize: "22px",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "1.09",
              letterSpacing: "0.38px",
              textAlign: "center",
              textTransform: "none",
            }}
          >
            {item}
          </Button>
        ))}
      </div>
      <div
        style={{
          width: "920px",
          height: "671px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "130px",
          gap: "100px"
        }}
      >
        <div
          style={{
            width: "233px",
            height: "671px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignContent: "center",
            gap: "88px"
          }}
        >
          <Box
            sx={{
              width: "157px",
              height: "157px",
              borderRadius: "89.5px",
            }}
          >
            <img
              src="\BrainImg.png"
              alt="Brain not found"
              height="100%"
              width="100%"
            />
          </Box>
          <Box
            sx={{
              width: "157px",
              height: "157px",
              borderRadius: "89.5px",
            }}
          >
            <img
              src="\Computers.png"
              alt="Brain not found"
              height="100%"
              width="100%"
            />
          </Box>
          <Box
            sx={{
              width: "157px",
              height: "157px",
              borderRadius: "89.5px",
            }}
          >
            <img
              src="\cellPhone.png"
              alt="CellPhone not found"
              height="100%"
              width="100%"
            />
          </Box>
        </div>
        <div
          style={{
            width: "350px",
            height: "350px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow:
              "18px 18px 36px 0 rgba(0, 0, 0, 0.25), -18px -18px 36px 0 rgba(255, 255, 255, 0.25)",
            backgroundColor: "#232732",
          }}
        >
          <Box
            sx={{
              width: "300px",
              height: "300px",
              borderRadius: "16px",
              margin: "30px 30px 0px 30px"
            }}
          >
            <img
              src={projectDataInfo[0].projectImg}
              alt="Brain not found"
              height="100%"
              width="100%"
            />
          </Box>
          <Typography>{projectDataInfo[0].projectName}</Typography>
          <Typography>{projectDataInfo[0].projectDesc}</Typography>
        </div>
      </div>
    </Box>
  );
}

export default Projects;
