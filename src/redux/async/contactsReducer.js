import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactsSuccess,
  deleteContactsSuccess,
  getContactsSuccess,
  //changeFilterContactsSuccess,
  changeFilter,
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
    return state.filter((contact) => contact.id !== payload);
  },
});
const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => {
    console.log(payload);
    return payload;
  },
});

export default combineReducers({ items, filter });
