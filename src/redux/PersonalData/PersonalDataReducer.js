const InitialState = {
    personal_data: {
        all_personal_data: [],
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

export const PersonalDataReducer = (state = InitialState, action) => {


    switch (action.type) {
        case "FETCH_PERSONAL_DATA_REQUEST":
            return {
                ...state,
                personal_data : {
                    ...state.all_personal_data,
                    loadStatus : "Pending",
                    loadMessage : "Loading personal data , please wait."
                }

            }
        case "FETCH_PERSONAL_DATA_SUCCESS":
            return {
                ...state,
                personal_data : {
                    ...state.personal_data,
                    all_personal_data : action.payload,
                    loadStatus : "Success",
                    loadMessage : ""
                }

            }
        case "FETCH_PERSONAL_DATA_FAILURE":
            return {
                ...state,
                personal_data : {
                    ...state.personal_data,
                    loadStatus: "Fail",
                    loadMessage : action.payload
                }

            }
            case "FETCH_PERSONAL_DATA_BY_ID_REQUEST":
            return {
                ...state,
                personal_data : {
                    ...state.personal_data,
                    loadStatus : "Pending",
                    loadMessage : "Loading personal data , please wait."
                }

            }
        case "FETCH_PERSONAL_DATA_BY_ID_SUCCESS":
            return {
                ...state,
                payment_status : {
                    ...state.personal_data,
                    fetched_personal_data : action.payload,
                    loadStatus : "Success",
                    loadMessage : ""
                }

            }
        case "FETCH_PERSONAL_DATA_BY_ID_FAILURE":
            return {
                ...state,
                personal_data : {
                    ...state.personal_data,
                    loadStatus: "Fail",
                    loadMessage : action.payload
                }

            }
        case "CREATE_PERSONAL_DATA_REQUEST":
            return {
                ...state,
                personal_data : {
                    ...state.personal_data,
                    createStatus : "Pending",
                    createMessage : ""
                }

            }
        case "CREATE_PERSONAL_DATA_SUCCESS":
            return {
                ...state,
                personal_data : {
                    ...state.personal_data,
                    created_personal_data : action.payload,
                    createStatus : "Pending",
                    createMessage : ""
                }

            }
        case "CREATE_PERSONAL_DATA_FAILURE":
            return {
                ...state,
                payment_status : {
                    loadStatus: "Fail",
                    loadMessage : action.payload
                }

            }
   
        default:
            return state

    }
}