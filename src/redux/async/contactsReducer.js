import { createReducer } from "@reduxjs/toolkit";
import * as contactsActions from "../app-actions";

const entities = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
});
