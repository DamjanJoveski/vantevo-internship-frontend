const InitialState = {
    company: {
        companies: [],
        specific_company: null,
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


export const CompanyReducer = (state = InitialState, action) => {


    switch (action.type) {
        case "FETCH_COMPANIES_REQUEST":
            return {
                ...state,
                company: {
                    ...state.company,
                    loadStatus: "Pending",
                    loadMessage: "Loading companies , please wait.."
                }

            }
        case "FETCH_COMPANIES_SUCCESS":
            return {
                ...state,
                company: {
                    ...state.company,
                    companies: action.payload.companies,
                    loadStatus: "Success",
                    loadMessage: ""
                }


            }
        case "FETCH_COMPANIES_FAILURE":
            return {
                ...state,
                company: {
                    ...state.company,
                    loadStatus: "Fail",
                    loadMessage: action.payload.msg
                }

            }
        case "FETCH_COMPANY_BY_ID_REQUEST":
            return {
                ...state,
                company: {
                    ...state.company,
                    loadStatus: "Pending",
                    loadMessage: "Loading company , please wait.."
                }

            }
        case "FETCH_COMPANY_BY_ID_SUCCESS":
            return {
                ...state,
                company : {
                    ...state.company,
                    specific_company : action.payload.company,
                    loadStatus : "Success",
                    loadMessage : ""
                }


            }
        case "FETCH_COMPANY_BY_ID_FAILURE":
            return {
                ...state,
                company: {
                    ...state.company,
                    loadStatus: "Fail",
                    loadMessage: action.payload.msg
                }

            }
        case "CREATE_COMPANY_REQUEST":
            return {
                ...state,
                company : {
                    ...state.company,
                    createStatus: "Pending",
                    createMessage : ""
                }

            }
        case "CREATE_COMPANY_SUCCESS":
            return {
                ...state,
                company : {
                    ...state.company,
                    created_company : action.payload.Company,
                    createStatus: "Success",
                    createMessage : ""
                }

            }
        case "CREATE_COMPANY_FAILURE":
            return {
                ...state,
                company : {
                    ...state.company,
                    createStatus: "Fail",
                    createMessage : action.payload.msg
                }

            }
        case "UPDATE_COMPANY_REQUEST":
            return {
                ...state,
                company : {
                    ...state.company,
                    updateStatus: "Pending",
                    updateMessage : ""
                }

            }
        case "UPDATE_COMPANY_SUCCESS":
            return {
                ...state,
                company : {
                    ...state.company,
                    updated_company : action.payload.company,
                    updateStatus: "Success",
                    updateMessage : ""
                }

            }
        case "UPDATE_COMPANY_FAILURE":
            return {
                ...state,
                company : {
                    ...state.company,
                    updateStatus: "Fail",
                    updateMessage : action.payload.msg
                }

            }
        case "DELETE_COMPANY_REQUEST":
            return {
                ...state,
                company : {
                    ...state.company,
                    deleteStatus: "Pending",
                    deleteMessage : ""
                }

            }
        case "DELETE_COMPANY_SUCCESS":
            return {
                ...state,
                company : {
                    ...state.company,
                    deleted_company : action.payload.company,
                    deleteStatus: "Success",
                    deleteMessage : ""
                }

            }
        case "DELETE_COMPANY_FAILURE":
            return {
                ...state,
                company : {
                    ...state.company,
                    deleteStatus: "Fail",
                    deleteMessage : action.payload.msg
                }

            }
        default:
            return state
    }
}