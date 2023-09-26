import { useRef } from "react";
import {
  StyledContainerInput,
  StyledContainerInputChildren,
  StyledInput,
  StyledLabel,
} from "./styles";

type InputProps = {
  placeholder?: string;
  title: string;
  name: string;
  errorMessage?: string | undefined;
  type?:
    | "number"
    | "text"
    | "date"
    | "email"
    | "checkbox"
    | "time"
    | "password";
  mask?: "telephone" | "cpf";
  value?: any;
  onChange: (data: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  step?: number;
  id?: string;
  getRef?: (ref: HTMLInputElement | undefined | null) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

export default function InputText({ ...props }: InputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledContainerInput>
      {props.title}
      {props.required && <span>{"*"}</span>}
      <StyledContainerInputChildren>
        <StyledInput
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.onChange}
          disabled={props.disabled}
          value={props.value}
          readOnly={props.readOnly}
          step={props.step}
          autoFocus={props.autoFocus}
          ref={inputRef}
          id={props.id}
          onKeyDown={props.onKeyDown}
        ></StyledInput>
        {props.children}
      </StyledContainerInputChildren>
    </StyledContainerInput>
  );
}
