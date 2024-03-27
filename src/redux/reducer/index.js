import { combineReducers } from "redux";
import { productReducer} from "./productReducer";
import { cartReducer } from "./cartReducer";
const allreducers = combineReducers({
    productReducer: productReducer,
    cartReducer:cartReducer,
});
export default allreducers;