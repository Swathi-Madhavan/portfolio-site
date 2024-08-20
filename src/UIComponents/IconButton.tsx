import { Button } from "@mui/material";
import React from "react";

interface IconButtonProps {
  link: string;
  icon: React.ReactNode;
}

export default function IconButton({ icon, link }: Readonly<IconButtonProps>) {
  return (
    <Button
      sx={{
        borderRadius: "50%",
        "& .MuiSvgIcon-root": {
          fontSize: "30px",
        },
      }}
    >
      <a href={link} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </Button>
  );
}
