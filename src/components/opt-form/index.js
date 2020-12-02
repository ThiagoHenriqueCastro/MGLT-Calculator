import React from "react";
import { Container, Input, Button } from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({
  handleButton,
  children,
  ...restProps
}) {
  return (
    <Button
      onClick={() => {
        handleButton();
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
};
