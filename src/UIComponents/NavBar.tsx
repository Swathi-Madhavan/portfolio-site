import { Box, Button } from "@mui/material";
import React from "react";
import { AppColorsData } from "../themes/ColoPallets";
import { NavBarButtonsData } from "../data";

function NavBar() {
  return (
    <Box
      sx={{
        width: "1305",
        height: "175",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: "71px",
      }}
    >
      {NavBarButtonsData.map((item, index) => (
        <Button
          sx={{
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

          }}
          key={item}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
}

export default NavBar;
