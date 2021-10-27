import { combineReducers } from "redux";
import dishes from "./dishesReducer";
import orders from './ordersReducer'

const rootReducer = combineReducers({ dishes, orders });

export default rootReducer;