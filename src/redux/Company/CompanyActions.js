import { createCompany as CreateCompanyCall,
updateCompany as UpdateCompanyCall, 
getCompanies as GetCompaniesCall,
deleteCompany as DeleteCompanyCall,
getCompanyById as GetCompanyByIdCall} from './CompanyApi.js'


export const createCompany = (company) => (dispatch , getState) => {
    dispatch({type : "CREATE_COMPANY_REQUEST"})

    CreateCompanyCall(company)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "CREATE_COMPANY_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "CREATE_COMPANY_FAILURE" , payload: error.message})
    })

}

export const fetchCompanies = () => (dispatch , getState) => {
    dispatch({type : "FETCH_COMPANIES_REQUEST"})
    GetCompaniesCall(getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "FETCH_COMPANIES_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "FETCH_COMPANIES_FAILURE" , payload: error.message})})

}

export const fetchCompanyById = (c_id) => (dispatch , getState) =>{ 
    dispatch({type: "FETCH_COMPANY_BY_ID_REQUEST"})
    
    GetCompanyByIdCall(c_id ,getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "FETCH_COMPANY_BY_ID_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "FETCH_COMPANY_BY_ID_FAILURE" , payload: error.message})})
}

export const updateCompany = (company) => (dispatch , getState) => {
    dispatch({type : "UPDATE_COMPANY_REQUEST"})

    UpdateCompanyCallCompanyCall(company , getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "UPDATE_COMPANY_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "UPDATE_COMPANY_FAILURE" , payload: error.message})
    })
}

export const deleteCompany = (co_id) => (dispatch , getState) => {
    dispatch({type : "DELETE_COMPANY_REQUEST"})

    DeleteCompanyCall(co_id , getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "DELETE_COMPANY_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "DELETE_COMPANY_FAILURE" , payload: error.message})
    })
}