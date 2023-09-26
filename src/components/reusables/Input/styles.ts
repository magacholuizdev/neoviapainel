import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/variables";

export const Container = styled.div`
  font-family: "IBM Plex Sans", sans-serif;

  .back {
    font-size: 14px;
    font-weight: 700;
    display: flex;
    width: 30px;
    margin-top: 35px;
    margin-left: 30px;
    align-items: flex-end;
    gap: 8px;
    min-width: 80px;
    cursor: pointer;
    @media (max-width: ${breakpoints.MOBILE_M}) {
      width: 100%;
      margin-left: 0;
    }
  }

  @media (max-width: ${breakpoints.MOBILE_M}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const StyledTitleLeft = styled.div`
  display: flex;
  color: ${colors.BLACK};
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  span {
    color: ${colors.REDWARNNING};
    padding: 0 5px;
  }
`;

interface StyledInputLeftProps {
  height?: string;
}

export const StyledInputLeft = styled.div<StyledInputLeftProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "auto")};
  margin: 4px 0 0 0;

  font-family: "IBM Plex Sans", sans-serif;

  input {
    font-family: "IBM Plex Sans", sans-serif;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${colors.PROTOTYPE_BLACK20};
    border-radius: 6px;
    padding: 8px 12px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);

    &:disabled {
      border: none;
      box-shadow: none;
      background-color: #0000;
    }
  }

  .company {
    border: none;
    box-sizing: none;
    background-color: transparent;
    box-shadow: none;
    padding: 8px 0;
  }

  select {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${colors.PROTOTYPE_BLACK20};
    border-radius: 6px;
    padding: 8px 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: ${colors.GRAYLIGHT} url("./assets/seta.svg") 97.5% 50% no-repeat;
  }

  textarea {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid ${colors.PROTOTYPE_BLACK20};
    border-radius: 6px;
    padding: 8px 12px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: inherit;
  }
`;
export const DoubleInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  justify-content: space-between;

  input {
    &:disabled {
      padding-left: 10px;
    }
  }

  @media (max-width: ${breakpoints.MOBILE_M}) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputRight = styled.div`
  label {
    text-align: right;
    width: 100%;
  }
  input {
    text-align: right;
  }
  @media (max-width: ${breakpoints.MOBILE_M}) {
    label {
      text-align: start;
    }
    input {
      text-align: start;
    }
  }
`;

export const BtnLeft = styled.button`
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  text-align: center;
  border-color: ${colors.NEOVIA_BLACK};
  color: ${colors.NEOVIA_BLACK_HOVER};
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
`;
export const BtnRight = styled.button`
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.GRAYLIGHT};
  background: ${colors.NEOVIA_BLACK_HOVER};
  border-radius: 8px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 564px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.MOBILE_M}) {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
  }
`;
