import React from "react";
import { ContactMeProps } from "../model";
import { Box, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";
import ContactMeIcon from "../assets/Images/ContactMeIcon";
import Divider from "../styledComponents/Divider";

function ContactMe({ contactTxt, contactDetails }: Readonly<ContactMeProps>) {
  return (
    <Box
      sx={{
        width: "915px",
        display: "display",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "164px auto auto auto",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontSize: "34px",
          fontWeight: "500",
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: "0.71",
          letterSpacing: "0.38px",
          color: AppColorsData.whiteColor,
        }}
      >
        {contactTxt}
      </Typography>
      <Divider />
      <div
        style={{
          width: "915px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: "166px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "349px",
            height: "356px",
            borderRadius: "29px",
            background:
              "linear-gradient(320.11deg, #232732 14.78%, #232732 95.73%)",
            boxShadow:
              "25px 25px 60px 0px rgba(0, 0, 0, 0.25), -25px -25px 60px 0px rgba(255, 255, 255, 0.05)",
            "& .MuiSvgIcon-root": {
              fontSize: "350px",
            },
          }}
        >
          <ContactMeIcon />
        </Box>
        <div
          style={{
            width: "457px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Typography>{contactDetails[0]}</Typography>
          <Typography>{contactDetails[1]}</Typography>
        </div>
      </div>
    </Box>
  );
}

export default ContactMe;
