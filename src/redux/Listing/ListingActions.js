import {createListing as CreateListingCall,
getListings as GetListingsCall,
getListingById as GetListingByIdCall, 
updateListing as UpdateListingCall} from './ListingApi'


export const createListing = (listing) => (dispatch , getState) => {
    dispatch({type: "CREATE_LISTING_REQUEST"})

    CreateListingCall(listing , getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "CREATE_LISTING_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "CREATE_LISTING_FAILURE" , payload: error.message})})
}


export const fetchListings = () => (dispatch , getState) => {
    dispatch({type: "FETCH_LISTINGS_REQUEST"})
    
    GetListingsCall(getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "FETCH_LISTINGS_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "FETCH_LISTINGS_FAILURE" , payload: error.message})})


}

export const fetchListingById = (id) => (dispatch , getState) => {
    dispatch({type: "FETCH_LISTING_BY_ID_REQUEST"})
    
    GetListingByIdCall(id ,getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "FETCH_LISTING_BY_ID_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "FETCH_LISTING_BY_ID_FAILURE" , payload: error.message})})


}

export const updateListing = (listing) => (dispatch , getState) => {
    dispatch({type: "UPDATE_LISTING_REQUEST"})

    UpdateListingCall(listing, getState().user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "UPDATE_LISTING_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "UPDATE_LISTING_FAILURE" , payload: error.message})})}

export const deleteListing = () => (dispatch , getState) => {

    
}