import { getPaymentStatuses as getPaymentStatusesCall ,
    getPaymentStatusById as getPaymentStatusByIdCall} from "./PaymentStatusApi";
    
    
    
    export const fetchPaymentStatuses = () => (dispatch , getState) =>{
        dispatch({type: "FETCH_PAYMENT_STATUSES_REQUEST"})
        
        getPaymentStatusesCall(getState().user.user.access_token)
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "FETCH_PAYMENT_STATUSES_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "FETCH_PAYYMENT_STATUSES_FAILURE" , payload: error.message})})
    }
    
    export const fetchPaymentStatusById = (ps_id) => (dispatch , getState) =>{
        dispatch({type: "FETCH_PAYMENT_STATUS_BY_ID_REQUEST"})
        
        getPaymentStatusByIdCall(ps_id,getState().user.user.access_token)
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "FETCH_PAYMENT_STATUS_BY_ID_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "FETCH_PAYMENT_STATUS_BY_ID_FAILURE" , payload: error.message})})
    }