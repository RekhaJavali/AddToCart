import { createStore } from "redux";
import rootredu from "./reducers/main";


const store = createStore(
    rootredu
)

export default store;

