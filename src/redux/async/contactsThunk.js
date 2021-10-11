import { BASE_URL } from "./contacts-api";
import {
  deleteContactsSuccess,
  getContactsSuccess,
  addContactsSuccess,
} from "../app-actions";
const { default: axios } = require("axios");

export function getContacts() {
  return function (dispatch) {
    dispatch({ type: "GET_CONTACTS_REQUEST" });
    return axios
      .get(`${BASE_URL}/contacts`)
      .then((res) => {
        console.log(res);
        dispatch(getContactsSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "GET_CONTACTS_FEILURE", payload: error });
      });
  };
}

export function addContacts(contacts) {
  return function (dispatch) {
    dispatch({ type: "ADD_CONTACTS_REQUEST" });
    return axios
      .post(`${BASE_URL}/contacts`, contacts)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (!res.data.name) {
          return null;
        }
        dispatch(addContactsSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "ADD_CONTACTS_FEILURE", payload: error });
      });
  };
}

export function deleteContacts(id) {
  return function (dispatch) {
    dispatch({ type: "DELETE_CONTACTS_REQUEST" });
    return axios
      .delete(`${BASE_URL}/contacts/${id}`)
      .then(() => {
        dispatch(deleteContactsSuccess(id));
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "DELETE_CONTACTS_FEILURE", payload: error });
      });
  };
}
