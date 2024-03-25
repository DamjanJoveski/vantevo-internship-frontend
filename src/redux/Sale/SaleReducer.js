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

            }
        case "FETCH_SALES_SUCCESS":
            return {

            }
        case "FETCH_SALES_FAILURE":
            return {

            }
        case "CREATE_SALE_REQUEST":
            return {

            }
        case "CREATE_SALE_SUCCESS":
            return {

            }
        case "CREATE_SALE_FAILURE":
            return {

            }
        case "UPDATE_SALE_REQUEST":
            return {

            }
        case "UPDATE_SALE_SUCCESS":
            return {

            }
        case "UPDATE_SALE_FAILURE":
            return {

            }
        case "DELETE_SALE_REQUEST":
            return {

            }
        case "DELETE_SALE_SUCCESS":
            return {

            }
        case "DELETE_SALE_FAILURE":
            return {

            }

    }
}