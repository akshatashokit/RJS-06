import { delay, put, takeLatest } from "redux-saga/effects";

export function *withdraw_stax(action){
    delay(5000);
    yield put({type:"WITHDRAW_STAX",value:(action.value + (action.value*0.10))})
};

export function *withdraw(){
    yield takeLatest("WITHDRAW", withdraw_stax);
};