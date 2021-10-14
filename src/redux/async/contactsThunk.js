import { contactsApi } from "redux/async";
import {
  deleteContactsSuccess,
  getContactsSuccess,
  addContactsSuccess,
} from "./contactsActions";
const { getContact, addContact, deleteContact } = contactsApi;

export function getContacts() {
  return function (dispatch) {
    dispatch({ type: "GET_CONTACTS_REQUEST" });
    return getContact()
      .then((data) => {
        dispatch(getContactsSuccess(data));
      })
      .catch((error) => {
        dispatch({ type: "GET_CONTACTS_FEILURE", payload: error });
      });
  };
}

export function addContacts(contacts) {
  return function (dispatch) {
    dispatch({ type: "ADD_CONTACTS_REQUEST" });
    return addContact(contacts)
      .then((data) => {
        dispatch(addContactsSuccess(data));
      })
      .catch((error) => {
        dispatch({ type: "ADD_CONTACTS_FEILURE", payload: error });
      });
  };
}

export function deleteContacts(id) {
  return function (dispatch) {
    dispatch({ type: "DELETE_CONTACTS_REQUEST" });
    return deleteContact(id)
      .then(() => {
        dispatch(deleteContactsSuccess(id));
      })
      .catch((error) => {
        dispatch({ type: "DELETE_CONTACTS_FEILURE", payload: error });
      });
  };
}
