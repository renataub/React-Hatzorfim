import { createStore } from "redux"
import allreducers from "./reducer";

const store = createStore(
    allreducers,
);
store.getState();
export default store;