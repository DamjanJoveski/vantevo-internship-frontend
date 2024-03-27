import { getUserRole as getUserRolesCall ,
getUserRoleById as GetUserRoleByIdCall} from "./UserRoleApi";



export const fetchUserRoles = () => (dispatch , getState) =>{
    dispatch({type: "FETCH_USER_ROLES_REQUEST"})
    
    getUserRolesCall(getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "FETCH_USER_ROLES_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "FETCH_USER_ROLES_FAILURE" , payload: error.message})})
}

export const fetchUserRoleById = (ur_id) => (dispatch , getState) =>{
    dispatch({type: "FETCH_USER_ROLES_BY_ID_REQUEST"})
    
    GetUserRoleByIdCall(ur_id,getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "FETCH_USER_ROLES_BY_ID_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "FETCH_USER_ROLES_BY_ID_FAILURE" , payload: error.message})})
}