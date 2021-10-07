import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import appReducer from "../redux/app-reducer";
import thunk from "redux-thunk";

const enhancer = applyMiddleware(thunk);

const store = configureStore({
  reducer: {
    contacts: appReducer,
    enhancer,
  },
});

export { store };
