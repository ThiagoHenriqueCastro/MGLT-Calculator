import React from "react";
import { Container, Holder, Logo, Break, Title } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Holder {...restProps}>{children}</Holder>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps} />;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Break = function HeaderBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
