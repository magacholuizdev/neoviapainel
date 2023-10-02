import { DefaultLayout } from "@/layouts";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { PrivateRoute } from "@/components";

/**
 * Descomentar a PrivateRoute
 * quando o User trouxer os profiles
 * na response de autenticação
 * 
*/

export default function Home(): JSX.Element {
  return (
    <AuthenticatedTemplate>
      <DefaultLayout>
        {/* <PrivateRoute requiredRoles={["ADMIN", "USER"]}> */}
        {/* </PrivateRoute> */}
      </DefaultLayout>
    </AuthenticatedTemplate>
  );
}
