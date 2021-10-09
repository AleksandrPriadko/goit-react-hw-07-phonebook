import { BASE_URL } from "./contacts-api";
const { default: axios } = require("axios");

// const fetchContactsRequest = createAction("app/fetchContactsRequest");
// const fetchContactsSuccess = createAction("app/fetchContactsSuccess");
// const fetchContactsError = createAction("app/fetchContactsError");

export function addContacts(contacts) {
  return function (dispatch) {
    dispatch({ type: "ADD_CONTACTS_REQUEST" });
    return axios
      .post(`${BASE_URL}/contacts`, contacts)
      .then((res) => {
        console.log(res);
        dispatch({ type: "ADD_CONTACTS_SUCCESS", payload: res.data });
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
      .post(`${BASE_URL}/contacts/${id}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "DELETE_CONTACTS_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "DELETE_CONTACTS_FEILURE", payload: error });
      });
  };
}
