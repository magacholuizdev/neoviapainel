import type { AppProps } from "next/app";

import { AuthProvider } from "@/contexts/AuthContext";

import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";

import { msalConfig } from "@/configurations/Microsoft";

import "primeflex/primeflex.css"
import "primeicons/primeicons.css"
import "primereact/resources/primereact.min.css"
import 'primereact/resources/themes/saga-blue/theme.css'

import PrimeReact, { PrimeReactProvider } from 'primereact/api'
PrimeReact.ripple = true;

import Head from "next/head";
import GlobalStyle from "@/styles/global";
import { ConfirmDialog } from "primereact/confirmdialog";
import ErrorBoundary from "./ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  const pca = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={pca}>
      <Head>
        <title>Neovia Engenharia - Portal</title>
      </Head>
      <AuthProvider>
        <PrimeReactProvider>
          <GlobalStyle />
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </PrimeReactProvider>
        <ConfirmDialog />
      </AuthProvider>
    </MsalProvider>
  );
}

export default MyApp;
