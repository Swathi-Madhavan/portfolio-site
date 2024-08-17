import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";

const PrimaryButton = styled(Button)({
  width: "100%",
  height: "60px",
  borderRadius: "24px",
  padding: "18px 27px 18px 28px",
  boxShadow:
    "5px 5px 10px 0px rgba(0, 0, 0, 0.25), -5px -5px 10px 0px rgba(255, 255, 255, 0.05)",
  backgroundColor: AppColorsData.secondaryDarkColor,
  color: AppColorsData.whiteColor,
  fontFamily: "Poppins",
  fontSize: "22px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "24px",
  letterSpacing: "0.38px",
  textAlign: "center",
  textTransform: "none",
  fontWeight: "500px",
  "&:hover": {
    backgroundColor: AppColorsData.secondaryDarkColor,
    color: AppColorsData.whiteColor,
  },
});

export default PrimaryButton;
