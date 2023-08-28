import Image from "next/image";
import { StyledBannerContainer, StyledBannerGroup } from "./styles";
import Banner1 from "../../../public/images/banner2.webp";

type BannerBigProps = {
  children?: React.ReactNode;
};

export default function BannerBig({ children }: BannerBigProps): JSX.Element {
  return (
    <StyledBannerContainer urlbackground="https://static.wixstatic.com/media/1eed39_7e95a421f7414ec4821ea358240a43f3~mv2.jpg/v1/fill/w_1351,h_780,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1eed39_7e95a421f7414ec4821ea358240a43f3~mv2.jpg"></StyledBannerContainer>
  );
}
