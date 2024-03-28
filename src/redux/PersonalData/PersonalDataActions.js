import {createPersonalData as createPersonalDataCall,
getPersonalData as getPersonalDataCall,
getPersonalDataById as getPersonalDataByIdCall,
} from './PersonalDataApi'
    
    
    export const createPersonalData = (personal_data) => (dispatch , getState) => {
        dispatch({type: "CREATE_PERSONAL_DATA_REQUEST"})
    
        createPersonalDataCall(personal_data)
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "CREATE_PERSONAL_DATA_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "CREATE_PERSONAL_DATA_FAILURE" , payload: error.message})})
    }
    
    
    export const fetchAllPersonalData = () => (dispatch , getState) => {
        dispatch({type: "FETCH_PERSONAL_DATA_REQUEST"})
        
        getPersonalDataCall()
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "FETCH_PERSONAL_DATA_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "FETCH_PERSONAL_DATA_FAILURE" , payload: error.message})})
    
    
    }
    
    export const fetchPersonalDataById = (pd_id) => (dispatch , getState) => {
        dispatch({type: "FETCH_PERSONAL_DATA_BY_ID_REQUEST"})
        
        getPersonalDataByIdCall(pd_id)
        .then(res => {
            if(res.code >= 400){
                throw new Error(res.msg)
            }
            dispatch({type: "FETCH_PERSONAL_DATA_BY_ID_SUCCESS" , payload: res})})
        .catch(error => {dispatch({type : "FETCH_PERSONAL_DATA_BY_ID_FAILURE" , payload: error.message})})
    
    
    }