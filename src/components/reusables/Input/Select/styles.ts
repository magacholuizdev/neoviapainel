import styled from "styled-components";
import { breakpoints, colors } from "../../../../../styles/variables";

interface ContainerProps {
  minWidth?: string;
  labelRight?: boolean;
  fitness?: boolean;
}

interface MenuProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-family: "IBM Plex Sans", sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ fitness }) => (fitness ? "" : "gap: 6px 0;")}
  label {
    display: flex;
    color: ${colors.BLACK};
    font-size: 14px;
    font-weight: 700;
    line-height: ${({ fitness }) => (fitness ? "12px" : "18px;")};
    justify-content: ${(props) =>
      props.labelRight ? "flex-end" : "flex-start"};
  }
  @media (max-width: ${breakpoints.MOBILE_M}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.button<ContainerProps>`
  display: flex;
  box-sizing: border-box;
  border: 1px solid ${colors.PROTOTYPE_BLACK20};
  border-radius: 6px;
  padding: 4px 0;
  background-color: ${colors.WHITE};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "auto")};
  cursor: pointer;

  @media (max-width: ${breakpoints.MOBILE_M}) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 6px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;

  > input {
    font-family: "IBM Plex Sans", sans-serif;
    border: none;
    background-color: transparent;
    width: 100%;
    cursor: pointer;
    display: flex;
    font-size: 13px;
    align-items: flex-end;

    :focus {
      outline: none;
    }
  }
`;

export const Icon = styled.div`
  margin-left: 6px;
  margin-right: 6px;
  width: 20px;
  height: 1rem;
  background: ${colors.GRAYLIGHT} url("./assets/seta.svg") 97.5% 50% no-repeat;
  cursor: pointer;
`;

export const Menu = styled.div<MenuProps>`
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  position: absolute;
  top: 60px;
  left: 0;

  width: 100%;
  max-height: 200px;
  overflow-y: scroll;

  background-color: ${colors.WHITE};
  box-shadow: 0px 0px 2px ${colors.GRAY};
  z-index: 2;

  > ul {
    font-family: "IBM Plex Sans", sans-serif;
    list-style: none;
    margin: 0;
    padding: 4px 0;

    > li {
      font-family: "IBM Plex Sans", sans-serif;
      text-align: left;
      padding: 6px 10px;
      font-size: 15px;
      cursor: pointer;

      & :not(:first-child) {
        margin-top: 4px;
      }

      :hover {
        background-color: ${colors.GRAY250};
      }
    }
  }
`;
