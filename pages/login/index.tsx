import { Container, InputWrapper } from "../../styles/pages/login/styles";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useWindowSize } from "hooks/useWindowSize";
import SignInData from "models/Auth/SignInData";
import { AuthContext } from "context/AuthContext";
import Image from "next/image";
import Logo from "../../public/images/NEOVIA_LOGO.png";
import InputText from "components/InputText";
import ButtonInsideInput from "components/Button/InsideInput";
import { clearSpaces, isEmptyString } from "utils/utils";
import ButtonSubmit from "components/Button/Submit";
import ButtonGroup from "components/ButtonGroup";
import BannerBig from "components/BannerBig";
import { PageLayout } from "components/MicrosoftSignIn/PageLayout";
import router, { useRouter } from "next/router";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import {
  loginRequest,
  msalConfig,
} from "components/MicrosoftSignIn/authConfig";
import { callMsGraph } from "components/MicrosoftSignIn/graph";
import { User } from "models/User";
import { setCookie } from "nookies";
import { AuthByProviderEnum } from "models/Auth/AuthByProviderEnum";
import { AuthResponse } from "models/Auth/AuthReponse";
import AuthContainer from "components/AuthContainer";
import { AuthService } from "services/AuthService";

export default function Login(): JSX.Element {
  const cookieParams = { secure: true, sameSite: "Strict" };
  const [signIn, setSignIn] = useState<SignInData>({ email: "" } as SignInData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { signInData, msg, logout } = useContext(AuthContext);
  const [hasError, setHasError] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const { windowWidth } = useWindowSize();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<User>();
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(() => true);
    } else {
      setIsMobile(() => false);
    }
  }, [windowWidth]);

  const ERROR_TIME_AWAIT = 5000;

  const { instance, accounts } = useMsal();

  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    console.log("Entrou no useEffect");
    if (isAuthenticated) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          callMsGraph(response.accessToken).then((response) => {
            console.log(response);
            setSignIn({ ...signIn, email: response.userPrincipalName });
            handleProviderSignIn(AuthByProviderEnum.MICROSOFT, {
              id: response.id,
              name: response.displayName,
              email: response.userPrincipalName,
            });
            router.push("/home");
          });
        });
    }
  }, [isAuthenticated]);

  async function callInfoUser(email: string) {
    setUser(await AuthService.portalLogin(email));
  }

  async function handleSignIn(event: FormEvent) {
    console.log("Entrou aqui");
    event.preventDefault();
    if (isEmptyString(signIn.email) || isEmptyString(signIn.password))
      return handleError("Preencha todos os campos");

    setIsLoading(true);
    signInData(signIn);
  }

  const handleProviderSignIn = (
    authProvider: AuthByProviderEnum,
    user: AuthResponse
  ) => {
    console.log("Email: ", user.email);
    const newSignIn: SignInData = {
      email: user.email || "",
      password: "",
      authByProvider: authProvider,
      authProviderUserId: user.id,
    };
    setIsLoading(true);
    signInData(newSignIn);
  };

  const handleInputChange = ({ target }: React.ChangeEvent<any>): void => {
    const { name } = target;
    let { value } = target;
    value = clearSpaces(value);
    if (signIn) {
      setSignIn({ ...signIn, [name]: value });
    }
  };

  const handleError = (msg: string): void => {
    setHasError(true);
    setMsgError(msg);
    setIsLoading(false);
    setTimeout(() => {
      setHasError(false);
      setMsgError("");
    }, ERROR_TIME_AWAIT);
  };

  return (
    <Container>
      <div className="form-container">
        <div className="logo-responsive">
          <form onSubmit={(e) => handleSignIn(e)}>
            <div className="logo__neovia">
              <Image src={Logo} width={223} height={56} alt="Logo Neovia" />
            </div>
            <InputWrapper>
              <InputText
                title="Usuário"
                type="text"
                name="username"
                placeholder="Digite seu usuário"
                onChange={(e) => handleInputChange(e)}
              ></InputText>
            </InputWrapper>
            <InputWrapper>
              <InputText
                title="Senha"
                name="password"
                placeholder="Digite sua senha"
                onChange={(e) => handleInputChange(e)}
                type={showPassword ? "text" : "password"}
              >
                <ButtonInsideInput
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "OCULTAR" : "MOSTRAR"}
                </ButtonInsideInput>
              </InputText>
            </InputWrapper>
            {hasError && <span>{msgError}</span>}
            <ButtonGroup>
              <ButtonSubmit>ENTRAR</ButtonSubmit>
            </ButtonGroup>
            <div className="form__esqueci-senha">
              <AuthContainer onResponse={handleProviderSignIn} />
            </div>
          </form>
        </div>
      </div>
      <BannerBig></BannerBig>
    </Container>
  );
}
