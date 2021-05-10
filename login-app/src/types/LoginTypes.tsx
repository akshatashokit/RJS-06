import LoginModal from "../model/Login";

export const LOGIN:string = "LOGIN";
export const LOGIN_SUCCESS:string = "LOGIN_SUCCESS";
export const LOGIN_FAIL:string = "LOGIN_FAIL";

interface LoginAsync{
    loading : boolean;
    status : LoginModal;
    error : string;
};

interface Login extends LoginAsync{
    type : typeof LOGIN;
};

interface LoginSuccess extends LoginAsync{
    type : typeof LOGIN_SUCCESS;
};

interface LoginFail extends LoginAsync{
    type : typeof LOGIN_FAIL;
};

export type LoginTypes = Login |  LoginSuccess | LoginFail;