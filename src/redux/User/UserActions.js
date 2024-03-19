import { Axios } from "axios";
import {API_URL} from '../../constants'
import  {login as LoginCall,
        register as RegisterCall} from './UserApi'


export const logout = () => dispatch => dispatch({type : "LOGOUT"})

export const login = (user) => (dispatch, getState) => {
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