import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("app/addContacts", (data) => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
}));

const deleteContact = createAction("app/deleteContacts");
const changeFilter = createAction("app/filterContacts");

export { addContact, deleteContact, changeFilter };

const fetchContactsRequest = createAction("app/fetchContactsRequest");
const fetchContactsSuccess = createAction("app/fetchContactsSuccess");
const fetchContactsError = createAction("app/fetchContactsError");

export { fetchContactsRequest, fetchContactsSuccess, fetchContactsError };
