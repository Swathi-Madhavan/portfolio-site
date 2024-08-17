import { styled } from "@mui/system";
import { Button } from "@mui/material";

const ForwardButton = styled(Button)({
  // borderRadius: "11px",
  // backgroundColor: "#232732",
  // boxShadow:
  //   "6px 6px 12px 0px rgba(0, 0, 0, 0.25), -6px -6px 12px 0px rgba(255, 255, 255, 0.05)",
  "& .MuiSvgIcon-root": {
    fontSize: "65px",
  },
});

export default ForwardButton;
