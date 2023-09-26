import { useEffect, useState } from "react";
import { Container, ContainerButton } from "./styles";

interface Iprops {
  onClick?: Function;
  onChange?: Function;
  value: boolean;
}

const ToggleButton: React.FC<Iprops> = (props: Iprops) => {
  const [isConnected, setIsConnected] = useState<boolean>(props.value);

  // useEffect(()=>{
  //   setIsConnected(props.value);
  // },[props.value])

  function handleOnClick(e: any) {
    props.onClick && props.onClick();
  }

  return (
    <Container>
      <ContainerButton>
        <input
          type={"checkbox"}
          checked={isConnected}
          defaultChecked={isConnected}
          onChange={() => props.onChange && props.onChange()}
          onClick={(e) => handleOnClick(e)}
        />
        <span />
      </ContainerButton>
    </Container>
  );
};

export default ToggleButton;
