import styled from "styled-components";
import { colors } from "../../../../styles/variables";

interface ContainerProps {
  size: number;
  image?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${colors.GRAY};
  color: ${colors.WHITE};
  font-size: calc((${(props) => props.size}px * 55) / 100);
  background-image: ${(props) =>
    props.image ? "url(" + props.image + ")" : "none"};
  background-size: cover;
  background-position: center;
`;

export const Label = styled.div`
  position: absolute;
  bottom: 0px;

  color: ${colors.WHITE};

  font-size: 0.65rem;
  font-weight: 700;

  padding: 2px 8px;
  border-radius: 8px;
  letter-spacing: 0.5px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
