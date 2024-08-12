import React from "react";
import { ContactMeProps } from "../model";
import { Box, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";

function ContactMe({ contactTxt, contactDetails }: ContactMeProps) {
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
      <div
        style={{
          width: "100%",
          height: "5px",
          backgroundColor: "#7733ff",
          marginTop: "31px"
        }}
      ></div>
      <div style={{
        width: "915px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: "166px",
        justifyContent: "space-between"
      }}>
        <div style={{
            width: "356px",
            height: "356px",
            
            borderRadius: "29px"
        }}>
          <img src="\GirlImage3.png" alt="Girl not found" height="100%" width="100%" />
        </div>
        <div style={{
          width: "457px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}>
          <Typography>
            {contactDetails[0]}
          </Typography>
          <Typography>
            {contactDetails[1]}
          </Typography>

        </div>

      </div>
    </Box>
  );
}

export default ContactMe;
