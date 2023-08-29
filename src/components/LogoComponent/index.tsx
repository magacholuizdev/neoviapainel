import Image from "next/image";
import Logo from "../../../public/images/NEOVIA_LOGO.png";

export default function LogoComponent(): JSX.Element {
  return <Image alt="Neovia Engenharia" src={Logo} width={210} height={65} />;
}
