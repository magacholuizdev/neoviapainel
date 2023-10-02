import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * LeftPanel component for navigation.
 * @param {object} props - The props for the LeftPanel.
 * @param {string} props.alignContent - The alignment of the content inside the LeftPanel.
 * @param {React.ReactNode} props.children - The content to render inside the LeftPanel.
 */

interface LeftPanelProps extends React.HTMLProps<HTMLElement> {
  alignContent?: string;
}

const StyledSidebar = styled.aside<LeftPanelProps>`
  flex: 0 0 350px;
  color: var(--cor-texto-secundario);
  background-color: var(--cor-fundo-secundaria);
  font-weight: 600;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.alignContent || "space-between"};
`;

function LeftPanel({ alignContent, children, ...props }: LeftPanelProps) {
  return (
    <StyledSidebar alignContent={alignContent} {...props}>
      {children}
    </StyledSidebar>
  );
}

LeftPanel.propTypes = {
  alignContent: PropTypes.string,
  children: PropTypes.node,
};

export default LeftPanel;
