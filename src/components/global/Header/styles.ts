import styled from "styled-components";
import { breakpoints, colors } from "../../../../styles/variables";

export const HeaderLayout = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  background-color: ${colors.COMMON_WHITE};
  box-shadow: 0px 5px 21px rgba(0, 0, 0, 0.1);
  left: 0px;
  right: 0px;
  top: 0px;
  padding: 0 24px;
  z-index: 10;
`;

export const Icon = styled.div`
  display: flex;
  width: 60px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MainLogo = styled.div`
  align-self: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: ${breakpoints.TABLET}) {
  }
`;

export const BottomBar = styled.div`
  display: flex;
  height: 8px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  > :first-child {
    margin-right: 16px;
  }
`;

export const RightCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  > :not(:first-child) {
    margin-left: 20px;
  }
`;
