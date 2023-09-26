import React, { useMemo } from "react";

import { Container, Icon, Spinner } from "./styles";
import { colors } from "../../../../styles/variables";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  notFilled?: boolean;
  notBordered?: boolean;
  text?: string;
  disabled?: boolean;
  shadow?: boolean;
  onClick?: () => void;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  notFilled,
  notBordered,
  text,
  disabled,
  shadow,
  onClick,
  loading,
}) => {
  const backgroundColor = useMemo(() => {
    if (!notFilled) {
      switch (variant) {
        case "secondary":
          return disabled ? colors.PROTOTYPE_GRAY500 : colors.WHITE;
        case "danger":
          return disabled ? colors.PROTOTYPE_GRAY500 : colors.RED;
        default:
          return disabled
            ? colors.PROTOTYPE_GRAY500
            : colors.NEOVIA_BLACK_HOVER;
      }
    }
    return "transparent";
  }, [variant, notFilled, disabled]);

  const color = useMemo(() => {
    if (disabled) {
      return notFilled ? colors.PROTOTYPE_GRAY500 : colors.WHITE;
    }
    switch (variant) {
      case "secondary":
        return notFilled ? colors.NEOVIA_BLACK_HOVER : colors.NEOVIA_BLACK;
      case "danger":
        return notFilled ? colors.RED : colors.WHITE;
      default:
        return notFilled ? colors.NEOVIA_BLACK_HOVER : colors.WHITE;
    }
  }, [variant, notFilled, disabled]);

  const borderColor = useMemo(() => {
    if (!notBordered) {
      if (disabled) {
        return colors.PROTOTYPE_GRAY500;
      }
      switch (variant) {
        case "secondary":
          return colors.GRAY;
        case "danger":
          return colors.RED;
        default:
          return colors.NEOVIA_BLACK_HOVER;
      }
    }
    return "transparent";
  }, [variant, notBordered, disabled]);

  return (
    <Container
      backgroundColor={backgroundColor}
      disabled={disabled}
      color={color}
      borderColor={borderColor}
      onClick={onClick}
      shadow={shadow}
    >
      {text}
      {loading && <Spinner color={color}></Spinner>}
    </Container>
  );
};

export default Button;
