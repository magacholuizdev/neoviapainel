import { styled } from "styled-components";

const StyledBannerContainer = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  align-items: center;
  top: -100px;

  @media (max-width: 1024px) {
    position: absolute;
    width: 80%;
    top: 73px;
  }
`;

export { StyledBannerContainer };
