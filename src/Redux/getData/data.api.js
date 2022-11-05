import {  get_data_failure, get_data_request, get_data_success } from "./data.action"

export const dataapi = (params)=>async (dispatch)=>{
    try{
        const data = await fetch("https://restcountries.com/v3.1/all")
        const res = await data.json();
        console.log(res);
        dispatch(get_data_success(res))
    }
    catch(err){
        dispatch(get_data_failure())
        console.log(err);
    }
    dispatch(get_data_request())
   

}