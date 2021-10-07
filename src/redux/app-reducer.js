import { combineReducers } from "redux";
import { addContact, deleteContact, changeFilter } from "./app-actions";
import { createReducer } from "@reduxjs/toolkit";
import { postContacts } from "./async/contacts-api";

const items = createReducer([], {
  [addContact]: (state, { payload }) => {
    //console.log(postContacts(payload).then((res) => res));
    const contactName = state.some((contact) => contact.name === payload.name);
    console.log(contactName);
    return contactName
      ? alert(`${payload.name} is already in contacts!`)
      : [...state, payload];
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
