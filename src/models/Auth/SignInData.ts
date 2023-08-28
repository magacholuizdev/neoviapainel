import { AuthByProviderEnum } from "./AuthByProviderEnum";

interface SignInData {
  email: string;
  password: string;
  authByProvider?: AuthByProviderEnum;
  authProviderUserId?: string;
}

export default SignInData;
