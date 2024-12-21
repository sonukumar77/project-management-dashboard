const INITIAL_STATE = {
  accessToken: "iuiuhihihi",
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ACCESS_TOKEN":
      return { ...state, accessToken: action.payload };

    default:
      return state;
  }
};

export default AuthReducer;
