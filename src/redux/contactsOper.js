import * as contactActions from "./app-actions";
import * as contactsApi from "./contacts-api";

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactActions.fetchContactsRequest());

  try {
    const contacts = await contactsApi.fetchContacts();
    dispatch(contactActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactActions.fetchContactsError(error));
  }
};
