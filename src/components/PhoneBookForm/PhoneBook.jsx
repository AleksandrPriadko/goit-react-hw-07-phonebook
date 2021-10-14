import { useDispatch } from "react-redux";
import { useState } from "react";
import Form from "./PhoneBookForm";
import { addContacts } from "redux/async/contactsThunk";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default function Phonebook() {
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

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
    dispatch(addContacts(newContact));

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
