import { styled } from "styled-components";
import { colors } from "../../../../styles/variables";

const StyledButtonInsideInput = styled.button`
  position: absolute;
  left: 68%;
  font-size: 10px;
  margin-top: 19px;
  color: ${colors.PROTOTYPE_GRAY500};
  line-height: 13px;
  font-weight: 700;
  border: 0;
  padding: 0px;
  background: none;
  cursor: pointer;
`;

export { StyledButtonInsideInput };
