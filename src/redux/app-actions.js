import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

// const addContact = createAction("app/addContacts", (data) => ({
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number,
//   },
// }));

// const deleteContact = createAction("app/deleteContacts");
// const changeFilter = createAction("app/filterContacts");

// export { addContact, deleteContact, changeFilter };

const getContactsRequest = createAction("GET_CONTACTS_REQUEST");
const getContactsSuccess = createAction("GET_CONTACTS_SUCCESS");
const getContactsError = createAction("GET_CONTACTS_FEILURE");
const addContactsRequest = createAction("ADD_CONTACTS_REQUEST");
const addContactsSuccess = createAction("ADD_CONTACTS_SUCCESS");
const addContactsError = createAction("ADD_CONTACTS_FEILURE");
const deleteContactsRequest = createAction("DELETE_CONTACTS_REQUEST");
const deleteContactsSuccess = createAction("DELETE_CONTACTS_SUCCESS");
const deleteContactsError = createAction("DELETE_CONTACTS_FEILURE");

export {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
};
