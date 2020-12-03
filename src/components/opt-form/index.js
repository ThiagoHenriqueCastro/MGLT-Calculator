import React, { createContext, useContext } from "react";
import { Container, Input, Button } from "./styles/opt-form";

const InputContext = createContext();

const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("");
  }

  return context;
};

export default function OptForm({ children, ...restProps }) {
  return (
    <InputContext.Provider value={restProps}>
      <Container {...restProps}>{children}</Container>
    </InputContext.Provider>
  );
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  const { value, OnChange } = useInputContext();
  return (
    <Input type="number" value={value} onChange={OnChange} {...restProps} />
  );
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
