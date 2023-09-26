import styled from "styled-components";
import { breakpoints, colors } from "../../../../../styles/variables";

export const Wrapper = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 6px 0;

  label {
    display: flex;
    color: ${colors.BLACK};
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
  }

  @media (max-width: ${breakpoints.MOBILE_M}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const DropdownBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  border: 1px solid ${colors.PROTOTYPE_BLACK20};
  border-radius: 6px;
  padding: 5px 0;

  position: relative;

  > button {
    background-color: transparent;
    border: none;
  }
`;

export const SelectionWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const SelectedOptions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 5px;
  flex-wrap: wrap;
  row-gap: 5px;
`;

export const SelectBox = styled.div`
  flex: 1;

  min-width: 80px;
  height: 25px;
  box-sizing: border-box;
  padding: 0 20px 0 8px;
  line-height: 25px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

  background: ${colors.GRAYLIGHT} url("/assets/seta.svg") 98.5% 50% no-repeat;
  color: ${colors.PROTOTYPE_GRAY500};
  border-left: 1px solid #343434;

  cursor: pointer;
`;

interface OptionListProps {
  show?: boolean;
}

export const OptionList = styled.ul<OptionListProps>`
  display: ${(props) => (props.show ? "block" : "none")};

  position: absolute;
  top: 100%;
  left: 0;
  z-index: 9999;

  background-color: ${colors.PROTOTYPE_WHITE};
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 20%);
  max-height: 450px;
  width: 100%;
  overflow: auto;
  font-size: 0.9rem;

  > li {
    display: flex;
    border-color: #cbd6e2;
    color: black;
    padding: 5px 16px;
    align-content: center;
    gap: 6px;

    cursor: pointer;
    align-items: center;
    transition: 0.2s;
    z-index: 9999;

    &:hover {
      background-color: ${colors.PROTOTYPE_GRAY};
      color: black;
      z-index: 9999;
    }
  }
`;
