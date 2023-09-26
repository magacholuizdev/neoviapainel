import { InputHTMLAttributes } from 'react';
import { BtnLeft, Container } from '../../styles';

type OptionProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  click?: () => any;
};

export default function ButtonLeft({ ...props }: OptionProps): JSX.Element {
  return (
    <Container onClick={props.click}>
      <BtnLeft>{props.title.toUpperCase()}</BtnLeft>
    </Container>
  );
}
