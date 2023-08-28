import { styled } from "styled-components";

type IProps = {
  urlbackground: string;
};

const StyledBannerContainer = styled.div<IProps>`
  background-image: url(${({ urlbackground }) => urlbackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 0 0 10px 10px;

  @media (min-width: 1024px) {
    flex: 1.6;
    display: flex;
    height: 100vh;
    width: 100%;
    background-position: initial;
    border-radius: 0;
  }
`;

const StyledBannerGroup = styled.div``;

export { StyledBannerContainer, StyledBannerGroup };
