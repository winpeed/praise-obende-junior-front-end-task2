import { createStore } from "redux";
import { rootReducer } from "../redux/reducers/productReducer";

const store = createStore(rootReducer);

store.subscribe(() => {});

export default store;
