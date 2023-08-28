import { styled } from "styled-components";
import { colors } from "../../../../styles/variables";

const StyledButtonSubmit = styled.button`
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 700;
  text-transform: none;
  font-size: 14px;
  padding: 4px;
  gap: 4px;
  line-height: 1.6;
  border: none;
  height: 40px;
  width: 275px;
  border-radius: 8px;
  background-color: ${colors.NEOVIA_BLACK};
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${colors.NEOVIA_BLACK_HOVER};
    box-shadow: none;
    border: 2px solid ${colors.NEOVIA_BLACK_HOVER};
  }
  &:disabled {
    color: white;
  }
`;

export { StyledButtonSubmit };
