import axios from "axios";
import { Dispatch } from "redux";
import { LOGIN, LoginTypes, LOGIN_FAIL, LOGIN_SUCCESS } from "../types/LoginTypes";

const loginAction = (obj:any)=>{
    return async (dispatch:Dispatch<LoginTypes>)=>{
        dispatch({
            type:LOGIN,
            status:{login:""},
            error:"",
            loading:false
        })
        try{
            const res = await axios.post("http://localhost:8080/login",obj);
            const { data } = res;
            dispatch({
                type : LOGIN_SUCCESS,
                status : data,
                error : "",
                loading : true
            })
        }catch(err){
            dispatch({
                type:LOGIN_FAIL,
                status:{login:"fail"},
                error : err.message,
                loading:true
            })
        }
    }
};
export default loginAction;