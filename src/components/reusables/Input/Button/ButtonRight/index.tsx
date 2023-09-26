import { InputHTMLAttributes } from 'react';
import { BtnRight, Container } from '../../styles';

type OptionProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  click?: () => any;
};

export default function ButtonRight({ ...props }: OptionProps): JSX.Element {
  return (
    <Container onClick={props.click}>
      <BtnRight>{props.title.toUpperCase()}</BtnRight>
    </Container>
  );
}
