import { combineReducers } from "redux";
//import { addContact, deleteContact, changeFilter } from "./app-actions";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactsSuccess,
  deleteContactsSuccess,
  getContactsSuccess,
} from "../../redux/app-actions";

const items = createReducer([], {
  [addContactsSuccess]: (state, { payload }) => {
    console.log(payload);
    console.log("addstate", state);
    const contactName = state.some((contact) => contact.name === payload.name);
    return contactName
      ? alert(`${payload.name} is already in contacts!`)
      : [...state, payload];
  },
  [getContactsSuccess]: (_, { payload }) => payload,
  [deleteContactsSuccess]: (state, { payload }) => {
    console.log("state", state);
    console.log("payload", payload);
    state.filter((contact) => contact.id !== payload);
  },

  // [deleteContactsSuccess]: (state, { payload }) =>
  //   state.filter(({ id }) => id !== payload),
});
// const filter = createReducer("", {
//   [changeFilter]: (_, { payload }) => payload,
// });

export default combineReducers({ items });
