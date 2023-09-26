import React, { useEffect, useRef } from "react";
import { Container, StyledTitleLeft, StyledInputLeft } from "../styles";

type InputProps = {
  placeholder?: string;
  title: string;
  name: string;
  errorMessage?: string | undefined;
  type?: "number" | "text" | "date" | "email" | "checkbox" | "time";
  mask?: "telephone" | "cpf";
  value?: any;
  onChange: (data: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  step?: number;
  id?: string;
  getRef?: (ref: HTMLInputElement | undefined | null) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function Input({ ...props }: InputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(
  //   () => props.getRef && props.getRef(inputRef.current),
  //   [inputRef.current]
  // );

  return (
    <Container>
      <StyledTitleLeft>
        <label {...{ htmlFor: props.id ? props.id : "" }}>
          {props.title}
          {props.required && <span>{"*"}</span>}
        </label>
      </StyledTitleLeft>
      <StyledInputLeft>
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          disabled={props.disabled}
          className={props.className}
          value={props.value}
          readOnly={props.readOnly}
          step={props.step}
          autoFocus={props.autoFocus}
          ref={inputRef}
          id={props.id}
          onKeyDown={props.onKeyDown}
        />
      </StyledInputLeft>
    </Container>
  );
}
