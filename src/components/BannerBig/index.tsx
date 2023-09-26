import Image from "next/image";
import { StyledBannerContainer, StyledBannerGroup } from "./styles";
import Banner2 from "../../../public/images/banner_2.png";

type BannerBigProps = {
  children?: React.ReactNode;
};

export default function BannerBig({ children }: BannerBigProps): JSX.Element {
  return (
    <StyledBannerContainer>
      <Image
        alt="banner_image"
        style={{ height: "100%", width: "100%" }}
        src={Banner2}
      />
    </StyledBannerContainer>
  );
}
