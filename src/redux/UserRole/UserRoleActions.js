import { getUserRole as getUserRolesCall } from "./UserRoleApi";



export const fetchUserRoles = (id = null) => (dispatch , getState) =>{
    dispatch({type: "FETCH_USER_ROLES_REQUEST"})
    
    getUserRolesCall(getState().user.user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "FETCH_USER_ROLES_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "FETCH_USER_ROLES_FAILURE" , payload: error.message})})
}