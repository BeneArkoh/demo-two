import { createContext, useContext } from "react";
export const AuthContext = createContext({
  username: "",
  token: null,
  isloggedIn: false,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};
