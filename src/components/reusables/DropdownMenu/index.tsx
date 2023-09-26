import React, { useState } from "react";

import { Button, Container, Wrapper, Icon, Menu } from "./styles";

interface DropdownMenuProps {
  children?: React.ReactNode;
  text?: string;
  width?: string;
  content?: React.ReactNode;
  positionY?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  text,
  width,
  content,
  positionY,
}) => {
  const [open, setOpen] = useState(false);

  function hiddeMenu() {
    setOpen(false);
  }

  function showMenu() {
    setOpen(true);
  }

  return (
    <Container>
      <Button onBlur={hiddeMenu} onClick={showMenu}>
        {content ? (
          content
        ) : (
          <Wrapper width={width}>
            {text}
            <Icon></Icon>
          </Wrapper>
        )}
        <Menu open={open} positionY={positionY} role="list">
          {children}
        </Menu>
      </Button>
    </Container>
  );
};

export default DropdownMenu;
