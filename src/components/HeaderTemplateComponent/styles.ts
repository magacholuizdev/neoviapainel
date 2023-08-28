import { styled } from "styled-components";
import { breakpoints, colors } from "../../../styles/variables";

const StyledHeaderContainer = styled.header`
  background-color: ${colors.WHITE};
  box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  height: 77px;
  position: sticky;
  top: -1%;
  z-index: 100;
  width: 100%;
  min-width: 320px;

  svg {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.TABLET}) {
    display: none;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    > .logo {
      margin-right: 10px;
    }

    .header-items {
      display: flex;
      align-items: center;
      gap: 20px;

      svg {
        font-size: 20px;
      }
    }
    .user-menu-wrapper {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
`;

export { StyledHeaderContainer };
