const InitialState = {
    payment_status: {
        payment_statuses: [],
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


export const PaymentStatusReducer = (state = InitialState, action) => {


    switch (action.type) {
        case "FETCH_PAYMENT_STATUSES_REQUEST":
            return {
                ...state,
                payment_status : {
                    ...state.payment_status,
                    loadStatus : "Pending",
                    loadMessage : "Loading payment statuses , please wait."
                }

            }
        case "FETCH_PAYMENT_STATUSES_SUCCESS":
            return {
                ...state,
                payment_status : {
                    ...state.payment_status,
                    payment_statuses : action.payload.payment_statuses,
                    loadStatus : "Success",
                    loadMessage : ""
                }

            }
        case "FETCH_PAYMENT_STATUSES_FAILURE":
            return {
                ...state,
                payment_status : {
                    loadStatus: "Fail",
                    loadMessage : action.payload
                }

            }
            case "FETCH_PAYMENT_STATUSES_BY_ID_REQUEST":
            return {
                ...state,
                payment_status : {
                    ...state.payment_status,
                    loadStatus : "Pending",
                    loadMessage : "Loading payment status , please wait."
                }

            }
        case "FETCH_PAYMENT_STATUSES_BY_ID_SUCCESS":
            return {
                ...state,
                payment_status : {
                    ...state.payment_status,
                    fetched_payment_status : action.payload.payment_status,
                    loadStatus : "Success",
                    loadMessage : ""
                }

            }
        case "FETCH_PAYMENT_STATUSES_BY_ID_FAILURE":
            return {
                ...state,
                payment_status : {
                    loadStatus: "Fail",
                    loadMessage : action.payload
                }

            }
        case "CREATE_PAYMENT_STATUS_REQUEST":
            return {

            }
        case "CREATE_PAYMENT_STATUS_SUCCESS":
            return {

            }
        case "CREATE_PAYMENT_STATUS_FAILURE":
            return {

            }
   
        default:
            return state

    }
}