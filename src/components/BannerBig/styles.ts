import { styled } from "styled-components";

const StyledBannerContainer = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 1024px) {
    flex: 1.6;
    display: flex;
    height: 100vh;
    background-position: initial;
    border-radius: 0;
  }
`;

const StyledBannerGroup = styled.div``;

export { StyledBannerContainer, StyledBannerGroup };
