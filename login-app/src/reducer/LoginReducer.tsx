import LoginModal from "../model/Login";
import { LOGIN, LoginTypes, LOGIN_FAIL, LOGIN_SUCCESS } from "../types/LoginTypes";

interface IState{
    loading:boolean;
    status:LoginModal;
    error:string;
}

const initialState:IState = {
    loading : false,
    status : {login:""},
    error : ""
}

const loginReducer = (state=initialState,action:LoginTypes):IState=>{
    switch(action.type){
        case LOGIN:
        case LOGIN_SUCCESS:
        case LOGIN_FAIL:
            return{
                ...state,
                loading:action.loading,
                error:action.error,
                status : action.status
            }
            break;
        default:
            return state;
    }
};
export default loginReducer;