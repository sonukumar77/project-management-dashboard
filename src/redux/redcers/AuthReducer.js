const INITIAL_STATE = {
  accessToken: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ACCESS_TOKEN":
      return { ...state, accessToken: action.payload };
    case "LOGOUT":
      return { ...state, accessToken: null };

    default:
      return state;
  }
};

export default AuthReducer;
