const { default: axios } = require("axios");

const BASE_URL = "http://localhost:3000";

function addContacts(contacts) {
  return function (dispatch) {
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
