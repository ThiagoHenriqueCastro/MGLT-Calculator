import React from "react";
import {
  Container,
  Inner,
  Item,
  Row,
  Icon,
  Title,
  SubTitle,
  InfoContainer,
  Result,
} from "./styles/cards";

export default function Cards({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Cards.Item = function CardsItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Cards.Row = function CardsRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Cards.Icon = function CardsIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Cards.Title = function CardsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Cards.SubTitle = function CardsSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Cards.InfoContainer = function CardsInfoContainer({ children, ...restProps }) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

Cards.Result = function CardsResult({ children, ...restProps }) {
  return <Result {...restProps}>{children}</Result>;
};
