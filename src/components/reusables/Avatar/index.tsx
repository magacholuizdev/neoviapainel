import React, { useMemo } from "react";

import { Container, Label, Wrapper } from "./styles";

interface AvatarProps {
  image?: string;
  size?: number;
  label?: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, size, label }) => {
  const defaultSize = useMemo(() => (size ? size : 32), [size]);

  return (
    <Wrapper>
      <Container size={defaultSize} image={image}></Container>
      {label && <Label>{label}</Label>}
    </Wrapper>
  );
};

export default Avatar;
