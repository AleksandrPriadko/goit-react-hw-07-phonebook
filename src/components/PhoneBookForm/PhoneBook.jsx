import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Form from "./PhoneBookForm";
import { addContacts } from "redux/async/contactsThunk";
import { getContactsSelector } from "redux/selectors/contacts-selectors";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default function Phonebook() {
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);
  const { name, number } = state;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      name,
      number,
    };
    const nameFromArrey = contacts.map((c) => c.name.toLowerCase());

    if (nameFromArrey.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContacts(newContact));
      setState(INITIAL_STATE);
    }

    setState(INITIAL_STATE);
  };

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      state={state}
    />
  );
}
