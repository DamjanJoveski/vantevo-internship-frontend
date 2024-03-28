const InitialState = {
    sale: {
        sales: [],
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


export const SaleReducer = (state = InitialState, action) => {


    switch (action.type) {
        case "FETCH_SALES_REQUEST":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    loadStatus : "Pending",
                    loadMessage : "Loading.."
                }

            }
        case "FETCH_SALES_SUCCESS":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    sales : action.payload.sale,
                    loadStatus : "Success",
                    loadMessage : ""
                }

            }
        case "FETCH_SALES_FAILURE":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    loadStatus : "Fail",
                    loadMessage : action.payload.msg
                }

            }

        case "FETCH_SALE_BY_ID_REQUEST":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    loadStatus : "Pending",
                    loadMessage : "Loading.."
                }

            }
        case "FETCH_SALE_BY_ID_SUCCESS":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    fetched_sale : action.payload.sale,
                    loadStatus : "Success",
                    loadMessage : ""
                }

            }
        case "FETCH_SALE_BY_ID_FAILURE":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    loadStatus : "Fail",
                    loadMessage : action.payload.msg
                }

            }
        case "CREATE_SALE_REQUEST":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    createStatus : "Pending",
                    createMessage : "Loading.."
                }

            }
        case "CREATE_SALE_SUCCESS":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    created_sale : action.payload.sale,
                    createStatus : "Success",
                    createMessage : ""
                }

            }
        case "CREATE_SALE_FAILURE":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    createStatus : "Fail",
                    createMessage : action.payload.msg
                }

            }
        case "UPDATE_SALE_REQUEST":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    updateStatus : "Pending",
                    updateMessage : "Loading.."
                }

            }
        case "UPDATE_SALE_SUCCESS":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    updated_sale : action.payload.sale,
                    updateStatus : "Success",
                    updateMessage : ""
                }

            }
        case "UPDATE_SALE_FAILURE":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    updateStatus : "Fail",
                    updateMessage : action.payload.msg
                }

            }
        case "DELETE_SALE_REQUEST":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    deleteStatus : "Pending",
                    deleteMessage : "Loading.."
                }

            }
        case "DELETE_SALE_SUCCESS":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    deleted_sale : action.payload.sale,
                    deleteStatus : "Success",
                    deleteMessage : ""
                }

            }
        case "DELETE_SALE_FAILURE":
            return {
                ...state,
                sale :{
                    ...state.sale,
                    deleteStatus : "Fail",
                    deleteMessage : action.payload.msg
                }

            }
        default:
            return state

    }
}