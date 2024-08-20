import React from "react";
import { CertificationsProps } from "../model";
import { Box, Typography } from "@mui/material";
import { AppColorsData } from "../themes/ColoPallets";
import Divider from "../styledComponents/Divider";

function Certifications({
  certificateTxt,
  certificateImg,
}: Readonly<CertificationsProps>) {
  return (
    <section id="certifications">
      <Box
        sx={{
          width: "915px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          margin: "67px auto auto auto",
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
            display: "flex",
            alignItems: "left",
          }}
        >
          {certificateTxt}
        </Typography>
        <Divider />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "118px",
          }}
        >
          {certificateImg.map((item, index) => (
            <div
              style={{
                width: "400px",
                height: "279",
                borderRadius: "24px",
                boxShadow:
                  "18px 18px 36px 0 rgba(0, 0, 0, 0.25), -18px -18px 36px 0 rgba(255, 255, 255, 0.05)",
              }}
              key={item}
            >
              <img
                src={item}
                alt="Certificate not found"
                height="100%"
                width="100%"
                style={{
                  borderRadius: "24px",
                }}
              />
            </div>
          ))}
        </div>
      </Box>
    </section>
  );
}

export default Certifications;
