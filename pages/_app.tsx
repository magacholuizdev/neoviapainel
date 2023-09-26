import Head from "next/head";
import type { AppProps } from "next/app";
import { DepartmentContextProvider } from "../src/context/DepartmentContext";
import "../styles/globals.css";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { PageWithLayout } from "../types/PageWithLayout";
import { useEffect } from "react";
import router, { useRouter } from "next/router";
import { AuthProvider } from "context/AuthContext";
import { msalConfig } from "components/AuthContainer/Microsoft/authConfig";

interface MyAppProps extends AppProps {
  Component: PageWithLayout;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") router.push("/login");
  }, [pathname]);
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <>
      <Head>
        <title>Neovia Engenharia - Portal</title>
      </Head>
      <AuthProvider>
        <MsalProvider instance={msalInstance}>
          <DepartmentContextProvider>
            <Component {...pageProps} />
          </DepartmentContextProvider>
        </MsalProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
