import React, { useRef, useState } from "react";
import * as Styled from "./style";

import seta from "./seta.svg";

export interface MultipleSelectOption {
  id: string;
  label: string;
  data?: any;
}

interface MultipleSelectProps {
  title: string;
  options: MultipleSelectOption[];
  value?: MultipleSelectOption[];
  placeHolder?: string;
  onChange?: (value: MultipleSelectOption[]) => void;
  errorMessage?: string | undefined;
}

const MultipleSelect = (props: MultipleSelectProps): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAddItem = (option: MultipleSelectOption, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const value = props.value ? props.value : [];
    const exists = value.find((e) => e.id === option.id);
    if (!exists) {
      props.onChange && props.onChange([...value, option]);
    }

    buttonRef.current?.blur();
  };

  const removeItem = (option: MultipleSelectOption) => {
    props.onChange &&
      props.onChange(
        props.value ? props.value.filter((e) => e.id !== option.id) : []
      );
  };

  function renderItems(options: MultipleSelectOption[]) {
    return options.map((value) => (
      <li onClick={(e) => handleAddItem(value, e)} key={value.id}>
        {value.label}
      </li>
    ));
  }

  return (
    <Styled.Wrapper>
      <label>{props.title}</label>

      <Styled.DropdownBox>
        <button
          ref={buttonRef}
          onFocus={() => setShowMenu(!showMenu)}
          onBlur={() => setShowMenu(false)}
        >
          <Styled.SelectionWrapper>
            <Styled.SelectedOptions>
              <Styled.SelectBox
                id="btnDropdown"
                onClick={() => setShowMenu(true)}
              >
                {props.placeHolder}
              </Styled.SelectBox>
            </Styled.SelectedOptions>
          </Styled.SelectionWrapper>

          <Styled.OptionList show={showMenu}>
            {renderItems(props.options)}
          </Styled.OptionList>
        </button>
      </Styled.DropdownBox>
    </Styled.Wrapper>
  );
};

export default MultipleSelect;
