import Head from "next/head";
import type { AppProps } from "next/app";
import { DepartmentContextProvider } from "../src/context/DepartmentContext";
import "../styles/globals.css";
import { PageWithLayout } from "../types/PageWithLayout";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "components/MicrosoftSignIn/authConfig";

interface MyAppProps extends AppProps {
  Component: PageWithLayout;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <>
      <Head>
        <title>Neovia Engenharia - Portal</title>
      </Head>
      <MsalProvider instance={msalInstance}>
        <DepartmentContextProvider>
          <Component {...pageProps} />
        </DepartmentContextProvider>
      </MsalProvider>
    </>
  );
}

export default MyApp;
