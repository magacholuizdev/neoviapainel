import styled from "styled-components";

export const ActionsButton = styled.span`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  font-weight: 700;
  margin: 11px;
  box-shadow: 0px -5px 21px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  > :first-child {
    margin-right: 8px;
  }
`;
