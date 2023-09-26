import React from "react";
import { useMsal } from "@azure/msal-react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { loginRequest } from "./authConfig";
import Image from "next/image";
import MicrosoftButton from "../../../public/images/ms-symbollockup_signin_light.svg";
import router from "next/router";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 * Note the [useMsal] package
 */

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance
      .loginRedirect({
        scopes: ["user.read"],
      })
      .then(() => {
        router.push("/home");
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
