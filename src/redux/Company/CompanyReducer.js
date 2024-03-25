const InitialState = {
    company: {
        companies: [],
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
                company : {
                    ...state.company,
                    loadStatus : "Pending",
                    loadMessage : "Loading companies , please wait.."
                }

            }
        case "FETCH_COMPANIES_SUCCESS":
            return {
                

            }
        case "FETCH_COMPANIES_FAILURE":
            return {

            }
        case "CREATE_COMPANY_REQUEST":
            return {

            }
        case "CREATE_COMPANY_SUCCESS":
            return {

            }
        case "CREATE_COMPANY_FAILURE":
            return {

            }
        case "UPDATE_COMPANY_REQUEST":
            return {

            }
        case "UPDATE_COMPANY_SUCCESS":
            return {

            }
        case "UPDATE_COMPANY_FAILURE":
            return {

            }
        case "DELETE_COMPANY_REQUEST":
            return {

            }
        case "DELETE_COMPANY_SUCCESS":
            return {

            }
        case "DELETE_COMPANY_FAILURE":
            return {

            }

    }
}