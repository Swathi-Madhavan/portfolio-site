import { Box } from "@mui/material";
import React from "react";

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
      <div
        style={{
          width: "474px",
          height: "474px",
          borderRadius: "50%",
          overflow: "hidden",
          boxShadow:
            "5px 5px 10px 0 rgba(0, 0, 0, 0.25), -5px -5px 10px 0 rgba(255, 255, 255, 0.25)",
        }}
      >
        <img
          src="\GirlImage.png"
          alt="My Portrait"
          height="100%"
          width="100%"
        ></img>
      </div>
    </Box>
  );
}

export default Picture;
