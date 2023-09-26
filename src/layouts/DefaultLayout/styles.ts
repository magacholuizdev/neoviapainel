import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/variables";

export const Container = styled.div`
  padding: 55px 100px 25px 50px;
  min-height: 100vh;
  width: 100%;

  @media (max-width: ${breakpoints.MOBILE_M}) {
    padding: 28px 16px 50px;
    width: 100%;
  }
`;
