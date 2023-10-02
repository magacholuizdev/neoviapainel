import Image from "next/image";
import LogoImg from "@/public/images/NEOVIA_LOGO.png";
import Link from "next/link";

interface LogoProps {
  redirect?: string
}

export default function Logo({ redirect = "/home" }: LogoProps) {
  return <Link href={redirect}>
    <Image alt="Neovia logo" src={LogoImg} width={300} height={120} />
  </Link>;
}
