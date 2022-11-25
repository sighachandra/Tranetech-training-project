import { combineReducers } from "@reduxjs/toolkit";
import common from './reduxStore/commonReducer'

const combinedReducers = combineReducers({
    common,
});

export default combinedReducers;