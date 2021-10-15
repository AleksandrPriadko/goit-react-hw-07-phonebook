import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactsSuccess,
  deleteContactsSuccess,
  getContactsSuccess,
  changeFilter,
} from "./contactsActions";

const items = createReducer([], {
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [getContactsSuccess]: (_, { payload }) => payload,
  [deleteContactsSuccess]: (state, { payload }) => {
    return state.filter((contact) => contact.id !== payload);
  },
});
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({ items, filter });
