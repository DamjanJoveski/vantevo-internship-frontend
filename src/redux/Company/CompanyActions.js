import { createCompany as CreateCompanyCall,
updateCompany as UpdateCompanyCall, 
getCompanies as GetCompaniesCall,
deleteCompany as DeleteCompanyCall} from './CompanyApi.js'


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

export const fetchCompanies = (co_id = null) => (dispatch , getState) => {
    dispatch({type : "FETCH_COMPANIES_REQUEST"})
    GetCompaniesCall(getState().user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "FETCH_COMPANIES_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "FETCH_COMPANIES_FAILURE" , payload: error.message})})

}

export const updateCompany = (company) => (dispatch , getState) => {
    dispatch({type : "UPDATE_COMPANY_REQUEST"})

    UpdateCompanyCallCompanyCall(company , getState().user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "UPDATE_COMPANY_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "UPDATE_COMPANY_FAILURE" , payload: error.message})
    })
}

export const deleteCompany = (co_id) => (dispatch , getState) => {
    dispatch({type : "UPDATE_COMPANY_REQUEST"})

    DeleteCompanyCall(co_id , getState().user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "UPDATE_COMPANY_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "UPDATE_COMPANY_FAILURE" , payload: error.message})
    })
}