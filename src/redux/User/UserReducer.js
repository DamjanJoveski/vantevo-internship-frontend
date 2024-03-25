const InitialState = {
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
            deleteMessage: ""
        }

    }

}
export const UserReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "LOGOUT":
            return {
                ...state,
                user: {
                    ...state.user,
                    current_user: null,
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
                        deleteMessage: ""
                    }
                }

            }

        case "LOGIN_REQUEST":
            return {
                ...state,
                user: {
                    ...state.user,
                    messages: {
                        ...state.user?.messages,
                        loginStatus: "Pending",
                        loginMessage: "Loading user .. Please wait."
                    }
                }

            }

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
                    }
                }

            }

        case "LOGIN_FAILURE":
            return {
                ...state,
                user: {
                    ...state.user,
                    messages: {
                        ...state.user.messages,
                        loginStatus: "Fail",
                        loginMessage: action.payload
                    }
                }

            }

        case "REGISTER_USER_REQUEST":
            return {
                ...state,
                user: {
                    messages: {
                        ...state.user.messages,
                        createStatus: "Pending",
                        createMessage: "Loading new user... Please wait."
                    }

                }


            }

        case "REGISTER_USER_SUCCESS":
            return {
                ...state,
                user: {
                    user: action.payload.user,
                    messages: {
                        ...state.user.messages,
                        createStatus: "Success",
                        createMessage: "User created."
                    }
                }

            }

        case "REGISTER_USER_FAILURE":
            return {
                ...state,
                user: {
                    messages: {
                        ...state.user.messages,
                        createStatus: "Fail",
                        createMessage: action.payload
                    }

                }

            }

        case "FETCH_USERS_REQUEST":
            return {
                ...state,
                user: {
                    ...state.user,
                    messages: {
                        ...state.user.messages,
                        createStatus: "Pending",
                        createMessage: "Loading users ... Please wait."
                    }
                }



            }

        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                user: {
                    ...state.user,
                    users: action.payload.users,
                    messages: {
                        ...state.user.messages,
                        createStatus: "Success",
                        createMessage: ""
                    }
                }

            }


        case "FETCH_USERS_FAILURE":
            return {
                ...state,
                user: {
                    ...state.user,
                    messages: {
                        ...state.user.messages,
                        createStatus: "Fail",
                        createMessage: action.payload
                    }
                }

            }


        case "CREATE_USER_REQUEST":
            return {
                ...state,
                user: {
                    ...state.user,
                    messages: {
                        ...state.user.messages,
                        createStatus: "Pending",
                        createMessage: "Loading new user... Please wait."
                    }
                }


            }
        case "CREATE_USER_SUCCESS":
            return {
                ...state,
                user: {
                    ...state.user,
                    user: action.payload.user,
                    messages: {
                        ...state.user.messages,
                        createStatus: "Success",
                        createMessage: "User created."
                    }

                }

            }
        case "CREATE_USER_FAILURE":
            return {
                ...state,
                user: {
                    ...state.user,
                    user: null,
                    messages: {
                        ...state.user.message,
                        createStatus: "Fail",
                        createMessage: action.payload
                    }

                }


            }

        case "UPDATE_USER_REQUEST":
            return {
                ...state,
                user: {
                    ...state.user,
                    messages: {
                        updateStatus: "Pending",
                        updateMessage: "Loading user... Please wait."
                    }
                }


            }

        case "UPDATE_USER_SUCCESS":
            return {
                ...state,
                user: {
                    ...state.user,
                    user: action.payload.user,
                    messages: {
                        updateStatus: "Success",
                        updateMessage: ""
                    }
                }


            }

        case "UPDATE_USER_FAILURE":
            return {
                ...state,
                user: {
                    ...state.user,
                    messages: {
                        updateStatus: "Fail",
                        updateMessage: action.payload
                    }
                }


            }
        case "DELETE_USER_REQUEST":
            return {
                ...state,
                user: {
                    ...state.user,
                    messages: {
                        ...state.user.messages,
                        deleteStatus: "Pending",
                        deleteMessage: "Deleting user... Please wait."
                    }
                }


            }
        case "DELETE_USER_SUCCESS":
            return {
                ...state,
                user: {
                    ...state.user,
                    user: action.payload.user,
                    messages: {
                        deleteStatus: "Success",
                        deleteMessage: ""
                    }
                }


            }
        case "DELETE_USER_FAILURE":
            return {
                ...state,
                messages: {
                    deleteStatus: "Fail",
                    deleteMessage: ""
                }

            }
        default:
            return state

    }

}