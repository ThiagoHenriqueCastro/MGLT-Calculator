import React, { useState, useContext, createContext } from "react";
import { Container, Input, Button } from "./styles/opt-form";

const InputContext = createContext();

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  const [input, setInput] = useState("");
  return (
    <InputContext.Provider value={{ input, setInput }}>
      <Input
        onChange={(value) => {
          setInput(value);
        }}
        value={input}
        {...restProps}
      />
    </InputContext.Provider>
  );
};

OptForm.Button = function OptFormButton({ load, children, ...restProps }) {
  return (
    <Button
      onClick={() => {
        load();
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
};
