import { Box } from "@mui/material";
import React from "react";
import { NavBarButtonsData } from "../data";
import HamBurgerIcon from "../assets/Images/UiIcons/HamBurgerIcon";
import PrimaryButton from "../styledComponents/PrimaryButton";

function NavBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "71px",
      }}
    >
      {NavBarButtonsData.map((item) => (
        <PrimaryButton key={item}>{item}</PrimaryButton>
      ))}
      <HamBurgerIcon />
    </Box>
  );
}

export default NavBar;
