export const InitialState = {
  user: {
    access_token: null,
    current_user: null,
    users: [],
    logout: false,
    messages: {
      createStatus: "idle",
      createMessage: "",
      loginStatus: "idle",
      loginMessage: "",
      updateStatus: "idle",
      updateMessage: "",
      deleteStatus: "idle",
      deleteMessage: "",
    },
  },
};
export const UserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "LOGOUT":
      return {
        user: {
          user: null,
          access_token: null,
          logout: true,
          messages: {
            createStatus: "idle",
            createMessage: "",
            loginStatus: "idle",
            loginMessage: "",
            updateStatus: "idle",
            updateMessage: "",
            deleteStatus: "idle",
            deleteMessage: "",
          },
        },
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        user: {
          ...state.user,
          messages: {
            ...state.user.messages,
            loginStatus: "Pending",
            loginMessage: "Loading user .. Please wait.",
          },
        },
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: {
          access_token: action.payload.access_token,
          current_user: action.payload.user,
          logout: false,
          messages: {
            ...state.user.messages,
            loginStatus: "Success",
            loginMessage: "",
          },
        },
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: {
          ...state.user,
          messages: {
            ...state.user.messages,
            loginStatus: "Fail",
            loginMessage: action.payload.msg,
          },
        },
      };
    case "REGISTER_USER_REQUEST":
      return {
        ...state,
        messages: {
          createStatus: "Pending",
          createMessage: "Loading new user... Please wait.",
        },
      };
    case "REGISTER_USER_SUCCESS":
      return {
        user: action.payload.user,
        messages: {
          createStatus: "Success",
          createMessage: "User created.",
        },
      };
    case "REGISTER_USER_FAILURE":
      return {
        user: null,
        messages: {
          createStatus: "Fail",
          createMessage: action.payload,
        },
      };
    case "FETCH_USER_REQUEST":
      return {};
    case "FETCH_USER_SUCCESS":
      return {};
    case "FETCH_USER_FAILURE":
      return {};
    case "CREATE_USER_REQUEST":
      return {};
    case "CREATE_USER_SUCCESS":
      return {};
    case "CREATE_USER_FAILURE":
      return {};
    case "UPDATE_USER_REQUEST":
      return {};
    case "UPDATE_USER_SUCCESS":
      return {};
    case "UPDATE_USER_FAILURE":
      return {};
    case "DELETE_USER_REQUEST":
      return {};
    case "DELETE_USER_SUCCESS":
      return {};
    case "DELETE_USER_FAILURE":
      return {};
  }
};
