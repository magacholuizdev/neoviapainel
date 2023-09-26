import React from "react";
import { useMsal } from "@azure/msal-react";
import Image from "next/image";
import MicrosoftButton from "../../../public/images/ms-symbollockup_signin_light.svg";
import router from "next/router";
import { loginRequest } from "./authConfig";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 * Note the [useMsal] package
 */

export const Microsoft = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance
      .loginPopup(loginRequest)
      .then((response) => {
        console.log("Logado ", response);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Image
      width={235}
      src={MicrosoftButton}
      alt="Mirosoft Button"
      onClick={() => handleLogin()}
    />
  );
};
