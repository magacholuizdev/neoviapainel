import { keyframes, styled } from "styled-components";
import { breakpoints, colors } from "../../../styles/variables";

const openAnimation = keyframes`  
  from { transform: translateX(-100%); }
  to { transform: translateX(0%);}
`;

type ItemSelectedProps = {
  isSelected: boolean | false;
};

const StyledSidebarBackground = styled.div`
  @media (min-width: ${breakpoints.TABLET}) {
    animation-name: ${openAnimation};
    animation-duration: 0.5s;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const StyledSidebarContainer = styled.aside`
  display: none;
  @media (min-width: ${breakpoints.TABLET}) {
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100vh;
    z-index: 50000000;
    position: static;
    background-color: ${colors.WHITE};
    //top: 0%;
    //bottom: 0%;
    //left: 0%;
    //right: 0%;
    > hr {
      width: 90%;
      opacity: 0.5;
    }
  }
`;

const StyledSidebarMenuAdmin = styled.ul`
  background: ${colors.NEOVIA_BLACK};
  color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const MenuAdminLink = styled.a<ItemSelectedProps>`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? colors.NEOVIA_RED : colors.WHITE)};
`;

// Sidebar hamburguer
const StyledCollapse = styled.div`
  display: none;
  @media (min-width: ${breakpoints.TABLET}) {
    display: initial;
    box-shadow: 0 4px 14px 0 rgb(0 0 0 / 10%);
  }
`;

const StyledCollapseIcon = styled.div`
  @media (min-width: ${breakpoints.TABLET}) {
    border: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 30px;
      cursor: pointer;
      margin-top: 20px;
    }
  }
`;

const StyledHeaderSidebarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  > hr {
    width: 90%;
    opacity: 0.3;
  }
`;

const MenuLink = styled.a<ItemSelectedProps>`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props) =>
    props.isSelected ? colors.NEOVIA_RED : colors.NEOVIA_BLACK};
  cursor: pointer;
`;

const MenuItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  svg {
    font-size: 20px;
  }
`;

export {
  StyledSidebarBackground,
  StyledSidebarContainer,
  StyledHeaderSidebarContainer,
  StyledCollapse,
  StyledCollapseIcon,
  StyledSidebarMenuAdmin,
  MenuAdminLink,
  MenuContainer,
  MenuLink,
  MenuItem,
};
