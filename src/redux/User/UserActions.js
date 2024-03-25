import { Axios } from "axios";
import {API_URL} from '../../constants'
import  {login as LoginCall,
        register as RegisterCall,
        updateUser as UpdateUserCall,
        deleteUser as DeleteUserCall,
        getUsers as getUsersCall} from './UserApi'


export const logout = () => dispatch => dispatch({type : "LOGOUT"})

export const login = (user) => (dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" });

    LoginCall(user)
        .then(res => {
            if (res.code >= 400) {   
                throw new Error(res.msg);
            } 
            dispatch({ type: "LOGIN_SUCCESS", payload: res });
        })
        .catch(error => {
            dispatch({ type: "LOGIN_FAILURE", payload: error.message });
        });
};

export const register = (user) => (dispatch , getState) => {
    dispatch({type: "REGISTER_USER_REQUEST"})

    RegisterCall(user)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "REGISTER_USER_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "REGISTER_USER_FAILURE" , payload: error.message})})
}

export const updateUser = (user) => (dispatch , getState) => {
    dispatch({type: "UPDATE_USER_REQUEST"})

    UpdateUserCall(user , getState().user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "UPDATE_USER_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "UPDATE_USER_FAILURE" , payload: error.message})})
}

export const deleteUser = (u_id) => (dispatch , getState) => {
    dispatch({type: "DELETE_USER_REQUEST"})

    DeleteUserCall(u_id , getState().user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "DELETE_USER_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "DELETE_USER_FAILURE" , payload: error.message})})
}


export const fetchUsers = () => async (dispatch , getState) => {
    dispatch({type: "FETCH_USERS_REQUEST"})

    getUsersCall(getState().user.access_token)
    .then(res => {
        if(res.code >= 400){
            throw new Error(res.msg)
        }
        dispatch({type: "FETCH_USERS_SUCCESS" , payload: res})})
    .catch(error => {dispatch({type : "FETCH_USERS_FAILURE" , payload: error.message})})

}
