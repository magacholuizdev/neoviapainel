import { loginRequest } from "@/configurations/Microsoft";
import { useMsal } from "@azure/msal-react";

import Cookies from "js-cookie";

import { ReactNode, createContext, useEffect, useState } from "react";
import { User } from "@/services/user/type";
import { authenticate } from "@/services/auth";
import { getUser } from "@/services/user";
import { useRouter } from "next/router";

interface ProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  login: () => Promise<void>;
  logout: () => void;
  user: User;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<User>({} as User);
  const router = useRouter();

  const { instance } = useMsal();

  useEffect(() => {
    const usr = Cookies.get("portal.username");
    if (usr) {
      setUser({
        ...user,
        name: usr,
      });
    }
  }, []);

  /**
   * Por enquanto o token está chegando nulo
   * Quando normalizar, descomentar as linhas abaixo!
   */
  async function login() {
    try {
      const {
        account: { username },
      } = await instance.loginPopup(loginRequest);
      // const { token } = await authenticate({ email: username });
      // Cookies.set('portal.token', token);
      // if (token) {
      const response = await getUser({ email: username });

      if (response) {
        Cookies.set("portal.username", response.name);
        // Cookies.set('portal.role', response.role);
        setUser(response);
        router.push("/home");
      }
      // }
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    Cookies.remove("portal.token");
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
