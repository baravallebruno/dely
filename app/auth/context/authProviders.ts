import { GoogleAuthProvider } from "firebase/auth";
import { AuthProviders } from "./types";

type AuthProviderMap = {
  [key in AuthProviders]: GoogleAuthProvider;
};

const providers: AuthProviderMap = {
  google: new GoogleAuthProvider(),
};

export default providers;
