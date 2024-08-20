import { Box, Button, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { ProjectsProps } from "../model";
import { AppColorsData } from "../themes/ColoPallets";
import PrimaryButton from "../styledComponents/PrimaryButton";
import BrainIcon from "../assets/Images/BrainIcon";
import MobileIcon from "../assets/Images/MobileIcon";
import ComputerIcon from "../assets/Images/ComputerIcon";
import BrainIconRect from "../assets/Images/BrainIconRect";
import Divider from "../styledComponents/Divider";
import GitHubIcon from "../assets/Images/GitHubIcon";

const imageMap: Record<string, React.ReactNode> = {
  portfolioApp: <BrainIconRect />,
  todoApp: <MobileIcon />,
  calcApp: <ComputerIcon />,
};

function Projects({
  project,
  projButtons,
  projectDataInfo,
}: Readonly<ProjectsProps>) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelect = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

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
      <Divider />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "71px",
          gap: "78px",
        }}
      >
        {projButtons.map((item, index) => (
          <PrimaryButton
            key={`project-${String(index)}`}
            onClick={() => handleSelect(index)}
          >
            {item}
          </PrimaryButton>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginTop: "130px",
        }}
      >
        <div
          style={{
            width: "233px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignContent: "center",
            gap: "88px",
          }}
        >
          {[
            { id: "1", icon: <BrainIcon /> },
            { id: "2", icon: <MobileIcon /> },
            { id: "3", icon: <ComputerIcon /> },
          ].map((icon, index) => (
            <Button
              sx={{
                width: "157px",
                height: "157px",
                borderRadius: "89.5px",
                boxShadow:
                  "10px 10px 20px 0px rgba(0, 0, 0, 0.55), -10px -10px 20px 0px rgba(255, 255, 255, 0.05)",
                "& .MuiSvgIcon-root": {
                  fontSize: "157px",
                },
              }}
              key={icon.id}
              onClick={() => handleSelect(index)}
            >
              {icon.icon}
            </Button>
          ))}
        </div>
        <div
          style={{
            width: "466px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: "10px",
            boxShadow:
              "18px 18px 36px 0px rgba(0, 0, 0, 0.25), -18px -18px 36px 0px rgba(255, 255, 255, 0.05)",
            backgroundColor: "#232732",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              top: "-20px",
              borderRadius: "16px",
              "& .MuiSvgIcon-root": {
                fontSize: selectedIndex !== 0 ? "250px" : "400px",
                marginTop: selectedIndex !== 0 ? "40%" : "0px",
                marginBottom: selectedIndex !== 0 ? "10%" : "0px",
              },
            }}
          >
            {imageMap[projectDataInfo[selectedIndex].projectImg]}
          </Box>
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: "600",
              lineHeight: "15px",
              letterSpacing: "0.38px",
              textAlign: "center",
              fontFamily: "Poppins",
              color: AppColorsData.whiteColor,
            }}
          >
            {projectDataInfo[selectedIndex].projectName}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: "300",
              lineHeight: "25px",
              letterSpacing: "0.38px",
              textAlign: "center",
              fontFamily: "Poppins",
              color: AppColorsData.whiteColor,
              marginTop: "24px",
            }}
          >
            {projectDataInfo[selectedIndex].projectDesc}
          </Typography>
          <Button
            sx={{
              height: "50px",
              width: "50%",
              fontSize: "50px",
              "& .MuiSvgIcon-root": {
                fontSize: "50px",
              },
            }}
          >
            <a
              href={`${projectDataInfo[selectedIndex].projGitLink}`}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default Projects;
