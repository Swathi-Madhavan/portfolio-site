import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: Readonly<MainProps>) {
  return <main>{children}</main>;
}
