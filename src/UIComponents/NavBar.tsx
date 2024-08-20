import { Box } from "@mui/material";
import { NavBarButtonsData } from "../data";
import HamBurgerIcon from "../assets/Images/UiIcons/HamBurgerIcon";
import PrimaryButton from "../styledComponents/PrimaryButton";
import HamburgerMenu from "../styledComponents/HamburgerMenu";
import styles from "./NavBar.module.scss";
import { useState } from "react";
import clsx from "clsx";
import { getURLMapping } from "../utils/common";
import React from "react";

export default function NavBar() {
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  const handleChange = () => {
    setShowMenuOptions((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <HamburgerMenu className={styles.btn} onClick={handleChange}>
        <HamBurgerIcon />
      </HamburgerMenu>

      <div className={styles.linksRoot}>
        {NavBarButtonsData.map((item) => (
          <a href={getURLMapping[item]} key={item}>
            <PrimaryButton
              className={clsx(styles.menuBtn, {
                [styles.hideLink]: showMenuOptions,
              })}
            >
              {item}
            </PrimaryButton>
          </a>
        ))}
      </div>
    </Box>
  );
}
