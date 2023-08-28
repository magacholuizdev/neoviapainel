import { StyledButtonSubmit } from "./styles";

type ButtonSubmitProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};
export default function ButtonSubmit({
  ...props
}: ButtonSubmitProps): JSX.Element {
  return (
    <StyledButtonSubmit type="submit">{props.children}</StyledButtonSubmit>
  );
}
