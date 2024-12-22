export const AuthAction = (accessToken) => {
  return {
    type: "ADD_ACCESS_TOKEN",
    payload: accessToken,
  };
};

export const LogoutAction = () => {
  return {
    type: "LOGOUT",
  };
};
