/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
import Navbar from "react-bootstrap/Navbar";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./SignOutButton";
import { SignInButton } from "./SignInButton";
import Link from "next/link";
import { ProfileData } from "./ProfileData";

/**
 * Renders the navbar component with a sign in or sign out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props: any) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark" className="navbarStyle">
        <div
          className="collapse navbar-collapse justify-content-end"
          style={{ cursor: "pointer", width: "100%" }}
        >
          <SignInButton />
        </div>
      </Navbar>
      <br />
      {props.children}
    </>
  );
};
