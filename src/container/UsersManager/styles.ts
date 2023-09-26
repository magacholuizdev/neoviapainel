import styled from "styled-components";
import { colors } from "../../../styles/variables";

type MainProps = {
  empty?: boolean;
};

export const MainContainer = styled.div<MainProps>`
  background-color: ${colors.COMMON_WHITE};
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;

  .MuiDataGrid-cell {
    outline: 0 !important;
  }
`;

export const TableToolBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const TableToolBarCol = styled.div`
  display: flex;
  align-items: center;

  > *:not(:first-child) {
    margin-left: 5px;
  }
`;
