import React from "react";
import { ContactMeProps } from "../model";
import { Box, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";
import ContactMeIcon from "../assets/Images/ContactMeIcon";
import Divider from "../styledComponents/Divider";
import GitHubIcon from "../assets/Images/GitHubIcon";
import LinkedInIcon from "../assets/Images/LinkedIn";
import IconButton from "./IconButton";
import GmailIcon from "../assets/Images/GmailIcon";

function ContactMe({ contactTxt, contactDetails }: Readonly<ContactMeProps>) {
  return (
    <section id="conact-me">
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
            flex: 1,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
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
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(320.11deg, #232732 14.78%, #232732 95.73%)",
                boxShadow:
                  "25px 25px 60px 0px rgba(0, 0, 0, 0.25), -25px -25px 60px 0px rgba(255, 255, 255, 0.05)",
                width: "349px",
                height: "356px",
                borderRadius: "29px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "300",
                  lineHeight: "25px",
                  letterSpacing: "0.38px",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  color: AppColorsData.whiteColor,
                }}
              >
                Swathi Madhavan
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  fontWeight: "300",
                  lineHeight: "25px",
                  letterSpacing: "0.38px",
                  textAlign: "center",
                  fontFamily: "Poppins",
                  color: AppColorsData.whiteColor,
                }}
              >
                swathipattam123@gmail.com
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "14px",
                  "& .MuiSvgIcon-root": {
                    fontSize: "30px",
                  },
                }}
              >
                <IconButton
                  icon={<GitHubIcon />}
                  link="https://github.com/Swathi-Madhavan"
                />
                <IconButton
                  icon={<LinkedInIcon />}
                  link="https://www.linkedin.com/in/swathi-madhavan-ab888b191/"
                />
                <IconButton
                  icon={<GmailIcon />}
                  link="mailto:swathipattam123@gmail.com"
                />
              </Box>
            </Box>
          </div>
        </div>
      </Box>
    </section>
  );
}

export default ContactMe;
