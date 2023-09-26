import styled from "styled-components";
import { colors } from "../../../../styles/variables";

interface MenuProps {
  open?: boolean;
  positionY?: string;
}

interface WrapperProps {
  width?: string;
}

export const Container = styled.div`
  color: inherit;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  position: relative;
  padding: 0;
  color: inherit;
`;

export const Wrapper = styled.div<WrapperProps>`
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${colors.NEOVIA_BLACK};
  padding: 10px 16px;
  border: 2px solid ${colors.NEOVIA_BLACK};
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${(props) => (props.width ? props.width : "auto")};
`;

export const Icon = styled.div`
  margin-left: 12px;
`;

export const Menu = styled.ul<MenuProps>`
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  position: absolute;
  bottom: 0;
  transform: translate(
    0,
    calc(100% - (${(props) => (props.positionY ? props.positionY : "-5px")}))
  );
  list-style: none;
  min-width: 100%;
  z-index: 1;
  margin-top: 5px;
  border-radius: 7px;
  border: 2px solid ${colors.NEOVIA_RED};
  background-color: ${colors.COMMON_WHITE};
  padding: 5px;

  > li {
    font-family: "IBM Plex Sans", sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    color: ${colors.BLACK};

    & :not(:first-child) {
      margin-top: 8px;
    }
  }
`;
