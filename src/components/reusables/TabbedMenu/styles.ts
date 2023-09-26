import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 3px;

  > .selected {
    box-shadow: 0 3px #2350e6;
    color: #2350e6;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  margin-left: 16px;
  &:first-child {
    margin-left: 0;
  }
`;

export const ItemWrapper = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;
  padding-top: 21px;
  padding-bottom: 18px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: inherit;
  > .selected {
    color: #2350e6;
  }
`;

export const Icon = styled.div`
  font-size: 1rem;
  flex: 1;
  margin-right: 10px;
`;
