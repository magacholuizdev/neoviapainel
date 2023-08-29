import Image from "next/image";
import { StyledBannerContainer, StyledBannerGroup } from "./styles";
import Banner1 from "../../../public/images/banner2.webp";

type BannerBigProps = {
  children?: React.ReactNode;
};

export default function BannerBig({ children }: BannerBigProps): JSX.Element {
  return (
    <StyledBannerContainer>
      <Image alt="banner_image" src={Banner1} />
    </StyledBannerContainer>
  );
}
