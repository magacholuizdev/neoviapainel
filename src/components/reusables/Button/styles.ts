import styled from 'styled-components';

interface ContainerProps {
  backgroundColor: string;
  borderColor: string;
  color: string;
  shadow?: boolean;
  disabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  font-family: 'IBM Plex Sans', sans-serif;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.borderColor};

  font-weight: 700;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  display: flex;
  align-items: center;

  box-shadow: ${(props) =>
    props.shadow ? '0px 6.37324px 14.0211px rgba(0, 0, 0, 0.1)' : 'none'};
`;

export const Icon = styled.div`
  margin-right: 8px;
`;

interface SpinnerProps {
  color: string;
}

export const Spinner = styled.div<SpinnerProps>`
  color: ${(props) => props.color};
  margin-left: 5px;
`;
