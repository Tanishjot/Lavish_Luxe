import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT
} from './ActionType';
import  { API_BASE_URL } from '../../config/apiConfig';
const token=localStorage.getItem("jwt")
// Register action creators
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload:user });
const registerFailure = error => ({ type: REGISTER_FAILURE, payload: error });

export const register = userData => async dispatch => {
  dispatch(registerRequest());
  try {
    const response=await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if(user.jwt){
      localStorage.setItem("jwt",user.jwt)
    } 
    console.log("registerr :",user)
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

// Login action creators
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = error => ({ type: LOGIN_FAILURE, payload: error });

export const login = userData => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if(user.jwt){
      localStorage.setItem("jwt",user.jwt)
    } 
    console.log("login ",user)
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};



//  get user from token
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = user => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = error => ({ type: GET_USER_FAILURE, payload: error });
export const getUser = (jwt) => async(dispatch)=>{
 
    dispatch(getUserRequest());
    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
          "Authorization":`Bearer ${jwt}`
        } 
      })
      const user = response.data;
      console.log("user ",user)
      dispatch(getUserSuccess(user));
      
    } catch (error) {
    //   const errorMessage = error.message;
      dispatch(getUserFailure(error.message));
    }
}


export const logout =()=> (dispatch) => {
    
      dispatch({ type: LOGOUT,payload:null });
      localStorage.clear();
    
  };
 