import React from "react";
import { ContactMeProps } from "../model";
import { Box, Button, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";
import ContactMeIcon from "../assets/Images/ContactMeIcon";
import Divider from "../styledComponents/Divider";
import GitHubIcon from "../assets/Images/GitHubIcon";
import LinkedInIcon from "../assets/Images/LinkedIn";

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
              <Button
                sx={{
                  borderRadius: "50%",
                  "& .MuiSvgIcon-root": {
                    fontSize: "30px",
                  },
                }}
              >
                <a
                  href={"https://github.com/Swathi-Madhavan"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </Button>

              <Button
                sx={{
                  borderRadius: "50%",
                  "& .MuiSvgIcon-root": {
                    fontSize: "30px",
                  },
                }}
              >
                <a
                  href={
                    "https://www.linkedin.com/in/swathi-madhavan-ab888b191/"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </Box>
  );
}

export default ContactMe;
