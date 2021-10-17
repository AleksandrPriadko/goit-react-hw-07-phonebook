import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import contactsReducer from "../redux/async/contactsReducer";
import thunk from "redux-thunk";

const enhancer = applyMiddleware(thunk);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    enhancer,
  },
});

export { store };
