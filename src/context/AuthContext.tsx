import SignInData from "models/Auth/SignInData";
import Router, { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
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
  const cookieParams = { secure: true, sameSite: "Strict" };
  const [msg, setMsg] = useState("");
  const [welcomeSeen, setWelcomeSeen] = useState<boolean>(false);
  const router = useRouter();

  const [userLevel, setUserLevel] = useState<number>(0);

  const [student, setStudent] = useState<StudentInfo | undefined>();

  useEffect(() => {}, []);

  function setTempMessage(message: string) {
    setMsg(message);
    setTimeout(() => setMsg(""), 3000);
  }

  async function getToken(data: SignInData): Promise<boolean> {
    try {
    } catch (_) {
      setTempMessage("Login ou senha incorretos");
    }

    return false;
  }

  async function signInData(dto: SignInData) {
    setMsg("");
    if (await getToken(dto)) {
    }
  }

  function isNoProductDomain(domain: string): boolean {
    return domain === process.env.MAIN_DOMAIN;
  }

  function logout() {

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
