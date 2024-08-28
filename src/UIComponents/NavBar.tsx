import { Box } from "@mui/material";
import { NavBarButtonsData } from "../data";
import HamBurgerIcon from "../assets/Images/UiIcons/HamBurgerIcon";
import PrimaryButton from "../styledComponents/PrimaryButton";
import HamburgerMenu from "../styledComponents/HamburgerMenu";
import styles from "./NavBar.module.scss";
import clsx from "clsx";
import { getURLMapping } from "../utils/common";
import React, { useState } from "react";
import localforage from "localforage";

export default function NavBar() {
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  const handleChange = () => {
    setShowMenuOptions((prev) => !prev);
  };

  const handleShowForm = (name: string) => {
    console.log("data form", localforage.getItem("formBuilder"));
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
          <a href={getURLMapping[item]} key={item} id={item}>
            <PrimaryButton
              className={clsx(styles.menuBtn, {
                [styles.hideLink]: showMenuOptions,
              })}
              onClick={() => handleShowForm(item)}
            >
              {item}
            </PrimaryButton>
          </a>
        ))}
      </div>
    </Box>
  );
}
