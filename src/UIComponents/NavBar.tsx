import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { AppColorsData } from "../themes/ColoPallets";
import { NavBarButtonsData } from "../data";
import HamBurgerIcon from "../assets/Images/UiIcons/HamBurgerIcon";
import styles from "./NavBar.module.scss";

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
          className={styles.btn}
          sx={{
            width: "148px",
            height: "60px",
            padding: "18px 27px 18px 28px",
            borderRadius: "24px",
            boxShadow:
              "1px 1px 1px 0 rgba(0, 0, 0, 0.25), -1px -1px 4px 0 rgba(255, 255, 255, 0.25)",
            backgroundColor: AppColorsData.secondaryDarkColor,
            color: AppColorsData.whiteColor,
            fontFamily: "Poppins",
            fontSize: "22px",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: "1.09",
            letterSpacing: "0.38px",
            textAlign: "center",
            textTransform: "none",
            "&.MuiButtonBase-root-MuiButton-root": {},
          }}
          key={item}
        >
          {item}
        </Button>
      ))}
      <HamBurgerIcon />
    </Box>
  );
}

export default NavBar;

const handler = () => {
  //
};

const handle = function () {
  //
};

let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});