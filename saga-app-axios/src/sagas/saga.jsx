import { call,put } from "redux-saga/effects";
import axios from "axios";

function getEmployees(){
    return axios.get("https://www.w3schools.com/angular/customers.php");
};

export function *getData(){
    const res = yield call(getEmployees);
    yield put({type:"EMPLOYEES",value:res});
};