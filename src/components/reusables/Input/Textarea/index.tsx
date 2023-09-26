import React from "react";

import { Container, StyledInputLeft, StyledTitleLeft } from "../styles";

interface TextareaProps {
  name: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  placeholder?: string;
  errorMessage?: string | undefined;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  readOnly?: boolean;
  height?: string;
}

const Textarea: React.FC<TextareaProps> = (props) => {
  return (
    <Container>
      <StyledTitleLeft>
        <label>
          {props.title}
          {props.required && <span>{"*"}</span>}
        </label>
      </StyledTitleLeft>
      <StyledInputLeft height={props.height}>
        <textarea
          onChange={props.onChange}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readOnly}
          className={props.className}
        >
          {props.value}
        </textarea>
      </StyledInputLeft>
    </Container>
  );
};

export default Textarea;
