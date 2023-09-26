import SignInData from "models/Auth/SignInData";
import { LoginResult } from "models/LoginResult/LoginResult";
import { User } from "models/User";
import { UserProfile, UserProfileName } from "models/UserProfile";
import Router, { useRouter } from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "services/AuthService";
import { UserProfileService } from "services/UserProfileService";
import store from "utils/store";

type AuthContextType = {
  signInData: (data: SignInData) => void;
  logout: () => void;
  msg: string;
};

type StudentInfo = {
  id: string;
  name: string;
  email: string;
  productId: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any, props: any) {
  const [user, setUser] = useState<User>();
  const [userProfile, setUserProfile] = useState<UserProfile>();
  const cookieParams = { secure: true, sameSite: "Strict" };
  const [msg, setMsg] = useState("");
  const router = useRouter();

  function setUserCookies(user: User, profile: UserProfile) {
    setCookie(undefined, "userData", JSON.stringify(user), cookieParams);
    setCookie(
      undefined,
      "userProfileData",
      JSON.stringify(profile),
      cookieParams
    );
  }

  function setTempMessage(message: string) {
    setMsg(message);
    setTimeout(() => setMsg(""), 3000);
  }

  async function getToken(data: SignInData): Promise<boolean> {
    try {
      let loginResult = {} as LoginResult;
      loginResult = await AuthService.login(data);
      AuthService.setToken(loginResult.token);
      setCookie(undefined, "painel.token", loginResult.token, cookieParams);
      return true;
    } catch (_) {
      setTempMessage("Login ou senha incorretos");
    }

    return false;
  }

  async function signInData(dto: SignInData) {
    setMsg("");
    if (await getToken(dto)) {
      const profile = await getUserInfo(dto.email);
      console.log("Profile: ", profile);
      routeIt(profile);
    }
  }

  async function getUserInfo(email: string): Promise<UserProfile | undefined> {
    try {
      const lUSer = await AuthService.getUserInfo(email);
      setUser(lUSer);

      const lUserProfile = await UserProfileService.getUserProfileById(
        lUSer.profileId
      );
      setUserProfile(lUserProfile);

      setUserCookies(lUSer, lUserProfile);
      return lUserProfile;
    } catch (_) {
      setTempMessage("Erro no login.");
    }
  }

  function routeIt(profile?: UserProfile) {
    if (profile) {
      switch (profile.name) {
        case UserProfileName.USER:
          router.push("/home");
          break;
        default:
          router.push("/home");
      }
    }
  }

  function logout() {
    destroyCookie(null, "painel.token");
    destroyCookie(null, "user");

    store.cleanAll();

    Router.push("/login");
  }

  return (
    <AuthContext.Provider
      value={{
        signInData,
        logout,
        msg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
