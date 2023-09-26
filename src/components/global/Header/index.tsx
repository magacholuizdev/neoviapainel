import Link from "next/link";
import Image from "next/image";
import { HeaderContent, HeaderLayout, MainLogo, RightCol } from "./styles";
import { useRouter } from "next/router";
import LetterAvatar from "components/reusables/Avatar/LetterAvatar";

function Header(): JSX.Element {
  const router = useRouter();

  function handleLogout() {
    router.push("/login");
  }

  return (
    <HeaderLayout>
      <HeaderContent></HeaderContent>
    </HeaderLayout>
  );
}

export default Header;
