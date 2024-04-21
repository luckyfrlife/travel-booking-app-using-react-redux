import { createStore } from "redux";
import bookingReducer from "./bookingReducer";

// TOOO pass a Reducer Function here
const store = createStore(bookingReducer);

export default store;
