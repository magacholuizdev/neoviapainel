import React from "react";
import { StyledButtonInsideInput } from "./styles";

type ButtonInsideInputProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};
export default function ButtonInsideInput({
  ...props
}: ButtonInsideInputProps): JSX.Element {
  return (
    <StyledButtonInsideInput onClick={props.onClick}>
      {props.children}
    </StyledButtonInsideInput>
  );
}
