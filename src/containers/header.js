import React from "react";
import { Header } from "../components";
import logo from "../sw.png";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src={logo} alt="nata.house" />
        <Header.Title>MGTL CALCULATOR</Header.Title>
      </Header.Frame>
      <Header.Break />
      {children}
    </Header>
  );
}
