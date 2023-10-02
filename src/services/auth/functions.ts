import Cookies from "js-cookie";
import { AuthManager } from "./types";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "@/configurations/Microsoft";

const AuthManager: AuthManager = {
  logout: () => {
    Cookies.remove('portal.token');
    const pca = new PublicClientApplication(msalConfig);
    pca.logoutRedirect({
      postLogoutRedirectUri: "/"
    })
  }
}

export default AuthManager;
