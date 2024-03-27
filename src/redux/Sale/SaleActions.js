import {createSale as CreateSaleCall,
getSaleById as GetSaleByIdCall ,
getSales as GetSalesCall,
updateSale as UpdateSaleCall,
deleteSale as DeleteSaleCall} from './SaleApi.js'
    
    
    export const createSale = (sale) => (dispatch , getState) => {
        dispatch({type : "CREATE_SALE_REQUEST"})
    
        CreateSaleCall(sale , getState().user.user.access_token)
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "CREATE_SALE_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "CREATE_SALE_FAILURE" , payload: error.message})
        })
    
    }
    
    export const fetchSales = () => (dispatch , getState) => {
        dispatch({type : "FETCH_SALES_REQUEST"})
        GetSalesCall(getState().user.user.access_token) 
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "FETCH_SALES_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "FETCH_SALES_FAILURE" , payload: error.message})})
    
    }
    
    export const fetchSaleById = (s_id) => (dispatch , getState) =>{ 
        dispatch({type: "FETCH_SALE_BY_ID_REQUEST"})
        
        GetSaleByIdCall(s_id ,getState().user.user.access_token) 
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "FETCH_SALE_BY_ID_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "FETCH_SALE_BY_ID_FAILURE" , payload: error.message})})
    }
    
    export const updateSale = (sale) => (dispatch , getState) => {
        dispatch({type : "UPDATE_SALE_REQUEST"})
    
        UpdateSaleCall(sale , getState().user.user.access_token) //
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "UPDATE_SALE_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "UPDATE_SALE_FAILURE" , payload: error.message})
        })
    }
    
    export const deleteSale = (s_id) => (dispatch , getState) => {
        dispatch({type : "DELETE_SALE_REQUEST"})
    
        DeleteSaleCall(s_id , getState().user.user.access_token)
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "DELETE_SALE_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "DELETE_SALE_FAILURE" , payload: error.message})
        })
    }