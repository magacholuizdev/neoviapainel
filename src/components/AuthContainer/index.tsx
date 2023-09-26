import { AuthByProviderEnum } from "models/Auth/AuthByProviderEnum";
import { AuthResponse } from "models/Auth/AuthReponse";
import { MicrosoftCredentialToken } from "models/Auth/Microsoft";
import MicrosoftButton from "../../../public/images/ms-symbollockup_signin_light.svg";
import Image from "next/image";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./Microsoft/authConfig";

interface AuthContainerProps {
  onResponse: (authProvider: AuthByProviderEnum, user: AuthResponse) => void;
}

export default function AuthContainer(props: AuthContainerProps) {
  const onMicrosoftResponse = (user: MicrosoftCredentialToken) => {
    props.onResponse(AuthByProviderEnum.MICROSOFT, {
      id: user.token,
      name: user.name,
      email: user.email,
    });
  };

  const { instance } = useMsal();

  const handleLogin = () => {
    instance
      .loginRedirect(loginRequest)
      .then((response) => {
        console.log("Logado: ", response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Image
        width={235}
        src={MicrosoftButton}
        alt="Mirosoft Button"
        onClick={() => handleLogin()}
      />
    </>
  );
}
