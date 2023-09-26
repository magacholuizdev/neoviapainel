import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background-color: transparent; 
`;

export const ContainerButton = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    :checked + span {
      background-color: #2350E6;
    }

    :checked + span:before {
      transform: translateX(15px);
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    transition: 0.3s;
    border-radius: 8px;
    border: 1px solid #EAEAEA;


    :before {
      position: absolute;
      content: '';
      height: 12px;
      width: 12px;
      left: 1.8px;
      bottom: 1px;
      background-color: #EAEAEA;
      border-radius: 50%;
      transition: 0.3s;
      border: transparent;
    }

    strong {
      position: absolute;
      left: 100%;
      width: max-content;
      line-height: 30px;
      margin-left: 10px;
      cursor: pointer;
    }
  }
`
