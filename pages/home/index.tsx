import LayoutComponent from "components/LayoutComponent";
import { Container } from "../../styles/pages/login/styles";
import { Fragment, useEffect, useState } from "react";
import {
  AuthenticatedTemplate,
  MsalAuthenticationTemplate,
  MsalProvider,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { callMsGraph } from "components/MicrosoftSignIn/graph";
import {
  loginRequest,
  msalConfig,
} from "components/MicrosoftSignIn/authConfig";
import { ProfileData } from "components/MicrosoftSignIn/ProfileData";
import { Button } from "react-bootstrap";
import { InteractionType, PublicClientApplication } from "@azure/msal-browser";

const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      });
  }

  return (
    <>
      <br />
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <Button variant="secondary" onClick={RequestProfileData}>
          Request Profile Information
        </Button>
      )}
    </>
  );
};

export default function Home(): JSX.Element {
  return (
    <AuthenticatedTemplate>
      <Container>
        <LayoutComponent></LayoutComponent>
      </Container>
    </AuthenticatedTemplate>
  );
}
