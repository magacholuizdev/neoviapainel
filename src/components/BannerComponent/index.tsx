import { StyledBannerContainer } from "./styles";

type BannerComponentProps = {
  children: React.ReactNode;
};

export default function BannerComponent({
  children,
}: BannerComponentProps): JSX.Element {
  return <StyledBannerContainer>{children}</StyledBannerContainer>;
}
