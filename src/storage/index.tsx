export const getAuthToken = () => {
  let token = localStorage.getItem("userToken");
  return token;
};

export const setAuthToken = (token: string) => {
  localStorage.setItem("userToken", token);
};

export const setUser = (user: any) => {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (e) {}
};

export const getUser = () => {
  try {
    const user = localStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
