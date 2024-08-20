import { styled } from "@mui/system";
import { Button } from "@mui/material";

const HamburgerMenu = styled(Button)({
  color: "#ffffff",
  display: "none",
  alignSelf: "flex-end",
  borderRadius: "50%",
  flexDirection: "column",
  cursor: "pointer",

  "& .MuiSvgIcon-root": {
    fontSize: "100px",
  },

  "& @media screen and (max-width: 600px)": {
    display: "block",
  },
});

export default HamburgerMenu;
