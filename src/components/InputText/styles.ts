import { styled } from "styled-components";
import { colors } from "../../../styles/variables";

const StyledContainerInput = styled.div`
  display: grid;
`;

const StyledContainerInputChildren = styled.div`
  display: flex;
`;

const StyledLabel = styled.label``;

const StyledInput = styled.input`
  font-weight: 400;
  background-color: ${colors.COMMON_WHITE};
  width: 100%;
  padding: 8px 12px 8px 12px;
  margin: 8px 0;
  border-radius: 6px;
  display: inline-block;
  border: 1px solid ${colors.PROTOTYPE_BLACK20};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
  @media (min-width: 1024px) {
    width: 90%;
  }
`;

export {
  StyledContainerInput,
  StyledContainerInputChildren,
  StyledLabel,
  StyledInput,
};
