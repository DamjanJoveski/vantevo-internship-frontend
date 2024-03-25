const InitialState = {
    user_role: {
        userroles: [],
        createStatus: "idle",
        createMessage: "",
        loadStatus: "idle",
        loadMessage: "",
        updateStatus: "idle",
        updateMessage: "",
        deleteStatus: "idle",
        deleteMessage: ""
    }
}


export const UserRoleReducer = (state = InitialState, action) => {


    switch (action.type) {
        case "FETCH_USER_ROLES_REQUEST":
            return {
                ...state,
                user_role : {
                    ...state.user_role,
                    loadStatus : "Pending",
                    loadMessage : "Loading user roles , please wait."
                }

            }
        case "FETCH_USER_ROLES_SUCCESS":
            return {
                ...state,
                user_role : {
                    ...state.user_role,
                    user_roles : action.payload.user_roles,
                    loadStatus : "Success",
                    loadMessage : ""
                }

            }
        case "FETCH_USER_ROLES_FAILURE":
            return {
                ...state,
                user_role : {
                    loadStatus: "Fail",
                    loadMessage : action.payload
                }

            }
        case "CREATE_USER_ROLE_REQUEST":
            return {

            }
        case "CREATE_USER_ROLE_SUCCESS":
            return {

            }
        case "CREATE_USER_ROLE_FAILURE":
            return {

            }
        case "UPDATE_USER_ROLE_REQUEST":
            return {

            }
        case "UPDATE_USER_ROLE_SUCCESS":
            return {

            }
        case "UPDATE_USER_ROLE_FAILURE":
            return {

            }
        case "DELETE_USER_ROLE_REQUEST":
            return {

            }
        case "DELETE_USER_ROLE_SUCCESS":
            return {

            }
        case "DELETE_USER_ROLE_FAILURE":
            return {

            }
        default:
            return state

    }
}