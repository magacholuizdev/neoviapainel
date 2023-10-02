import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { LeftPanel } from "@/components";

import BannerImg from "@/public/images/banner_2.png";

import Image from "next/image";
import { MicrosoftLoginButton } from "@/views";
import { Logo } from "@/views/common";

export default function Login(): JSX.Element {
  const { login } = useContext(AuthContext);

  return (
    <div className="h-screen flex overflow-y-hidden">
      <LeftPanel>
        <Logo />
        <MicrosoftLoginButton onLogin={login} />
        <div />
      </LeftPanel>
      <main className="flex-1">
        <div className="h-full relative">
          <Image
            alt="banner_image"
            src={BannerImg}
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
      </main>
    </div>
  );
}
