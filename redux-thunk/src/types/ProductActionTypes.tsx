//Types
//Tasks


//import modal
import Product from "../modal/Product";

//TASKS
export const PRODUCTS_LOADING:string = "PRODUCTS_LOADING";
export const PRODUCTS_LOADING_SUCCESS:string = "PRODUCTS_LOADING_SUCCESS";
export const PRODUCTS_LOADING_FAIL:string = "PRODUCTS_LOADING_FAIL";


//interface
interface ProductsAsync{
    loading : boolean;
    products : Product[];
    error : string;
};



