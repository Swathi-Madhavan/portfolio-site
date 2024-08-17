import { Box } from "@mui/material";
import React from "react";
import GirlImage from "../assets/Images/GirlImage";

function Picture() {
  return (
    <Box
      sx={{
        width: "474px",
        height: "474px",
        margin: "147px auto 0px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow:
            "10px 10px 20px 0px #00000040 inset,-10px -10px 20px 0px #FFFFFF40 inset",
          "& .MuiSvgIcon-root": {
            fontSize: "474px",
          },
          background:
            "linear-gradient(320.11deg, #2F3339 14.78%, #15181C 95.73%)",
        }}
      >
        <GirlImage />
      </Box>
    </Box>
  );
}

export default Picture;
