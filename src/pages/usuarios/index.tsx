import { DefaultLayout } from "@/layouts";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { PrivateRoute } from "@/components";
import { UserList } from "@/views";
import { UserProvider } from "@/contexts/UserContext";

/**
 * Descomentar a PrivateRoute
 * quando o User trouxer os profiles
 * na response de autenticação
 * 
*/

export default function Users(): JSX.Element {
  return (
    <AuthenticatedTemplate>
      <DefaultLayout>
        {/* <PrivateRoute requiredRoles={["ADMIN", "USER"]}> */}
        <UserProvider>
          <UserList />
          {/* </PrivateRoute> */}
        </UserProvider>
      </DefaultLayout>
    </AuthenticatedTemplate>
  );
}
