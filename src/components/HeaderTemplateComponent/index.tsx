import LogoComponent from "components/LogoComponent";
import { StyledHeaderContainer } from "./styles";
import Link from "next/link";

type HeaderTemplateComponentProps = {
  children?: React.ReactNode;
};

export default function HeaderTemplateComponent({
  children,
}: HeaderTemplateComponentProps): JSX.Element {
  return (
    <StyledHeaderContainer>
      <div className="header">
        <Link href="/home">
          <LogoComponent />
        </Link>
      </div>
    </StyledHeaderContainer>
  );
}
