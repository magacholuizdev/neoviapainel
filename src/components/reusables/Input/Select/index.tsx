import React, { useMemo, useState } from "react";
import { StyledTitleLeft } from "../styles";
import {
  Container,
  InputWrapper,
  Menu,
  ButtonWrapper,
  Wrapper,
  Icon,
} from "./styles";

export interface Select {
  label: string;
  value: string;
}

interface SelectProps {
  value?: string;
  title: string;
  options: Select[];
  minWidth?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  errorMessage?: string;
  required?: boolean;
  labelRight?: boolean;
  fitness?: boolean;
}

const Select: React.FC<SelectProps> = ({
  value,
  title,
  options,
  minWidth,
  placeholder,
  onChange,
  errorMessage,
  required,
  labelRight,
  fitness,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const selected = useMemo(() => {
    if (value) return options.find((op) => op.value === value);
    else return { value: "", label: "" };
  }, [value, options]);

  function handleSelect(op: Select, e: React.MouseEvent) {
    e.preventDefault();
    onChange && onChange(op.value);
    setMenuOpen(false);
  }

  function open() {
    setMenuOpen(true);
  }

  function close() {
    setMenuOpen(false);
  }

  return (
    <Container labelRight={labelRight} fitness={fitness}>
      <StyledTitleLeft>
        <label>
          {title}
          {required && <span>{"*"}</span>}
        </label>
      </StyledTitleLeft>
      <Wrapper
        onFocus={open}
        onBlur={close}
        minWidth={minWidth}
        role="combobox"
      >
        <ButtonWrapper>
          <InputWrapper>
            <input
              type="text"
              value={selected?.label}
              onClick={open}
              readOnly
              placeholder={placeholder}
            />
          </InputWrapper>
          <Icon onClick={() => setMenuOpen(!menuOpen)} />
        </ButtonWrapper>
        <Menu open={menuOpen}>
          <ul>
            {options.map((op, i) => (
              <li key={`${op.value}-${i}`} onClick={(e) => handleSelect(op, e)}>
                {op.label}
              </li>
            ))}
          </ul>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Select;
