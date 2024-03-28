const InitialState = {
    listing: {
        listings: [],
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


export const ListingReducer = (state = InitialState, action) => {


    switch (action.type) {
        case "FETCH_LISTINGS_REQUEST":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    loadStatus : "Pending",
                    loadMessage : "Loading listings , please wait.."
                }

            }
        case "FETCH_LISTINGS_SUCCESS":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    loadStatus : "Success",
                    loadMessage : "",
                    listings : action.payload.listings

                }

            }
        case "FETCH_LISTINGS_FAILURE":
            return {
                ...state, 
                listing : {
                    ...state.listing,
                    loadStatus : "Fail",
                    loadMessage : action.payload.msg
                }
            }
            case "FETCH_LISTING_BY_ID_REQUEST":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    loadStatus : "Pending",
                    loadMessage : "Loading listing , please wait.."
                }

            }
        case "FETCH_LISTING_BY_ID_SUCCESS":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    fetched_listing : action.payload.listing,
                    loadStatus : "Success",
                    loadMessage : "",

                }

            }
        case "FETCH_LISTING_BY_ID_FAILURE":
            return {
                ...state, 
                listing : {
                    ...state.listing,
                    loadStatus : "Fail",
                    loadMessage : action.payload.msg
                }
            }
        case "CREATE_LISTING_REQUEST":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    createStatus: "Pending",
                    createMessage : ""
                }

            }
        case "CREATE_LISTING_SUCCESS":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    createStatus : "Success",
                    createMessage : "New listing created.",
                    listing : action.payload.Listing,
                    
                }

            }
        case "CREATE_LISTING_FAILURE":
            return {
                ...state, 
                listing : {
                    ...state.listing,
                    createStatus : "Fail",
                    createMessage : action.payload.msg
                }

            }
        case "UPDATE_LISTING_REQUEST":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    updateStatus : "Pending",
                    updateMessage : ""
                }

            }
        case "UPDATE_LISTING_SUCCESS":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    updated_listing : action.payload.listing,
                    updateStatus : "Success",
                    updateMessage : ""

                }

            }
        case "UPDATE_LISTING_FAILURE":
            return {
                ...state, 
                listing : {
                    ...state.listing,
                    updateStatus : "Fail",
                    updateMessage : action.payload.msg
                }

            }
        case "DELETE_LISTING_REQUEST":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    deleteStatus : "Pending",
                    deleteMessage : ""
                }

            }
        case "DELETE_LISTING_SUCCESS":
            return {
                ...state,
                listing : {
                    ...state.listing,
                    deleted_listing : action.payload.listing,
                    deleteStatus : "Success",
                    deleteMessage : ""

                }

            }
        case "DELETE_LISTING_FAILURE":
            return {
                ...state, 
                listing : {
                    ...state.listing,
                    deleteStatus : "Fail",
                    deleteMessage : action.payload.msg
                }

            }
        default:
            return state

    }
}