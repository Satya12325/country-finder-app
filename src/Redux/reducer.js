import {combineReducers} from "redux";

import {data_reducer} from "./getData/data.reducer"
export const rootReducer = combineReducers({
  
    countrydata :  data_reducer
})