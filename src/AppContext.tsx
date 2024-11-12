import { createContext, useContext } from "react";
import { getAuthToken, getUser, setAuthToken, setUser } from "storage";

export const AppContext = createContext({
  token: getAuthToken(),
  user: getUser(),
  updateUser: (data: any) => {
    setUser(data);
  },
  updateToken: (token: any) => {
    setAuthToken(token);
  },
});

export const useAppContext = () => {
  const { updateToken, updateUser, token, user } = useContext(AppContext);

  return {
    updateToken,
    updateUser,
    token,
    user,
  };
};
