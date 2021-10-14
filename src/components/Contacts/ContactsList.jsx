import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Style.module.scss";
import { visibleContacts } from "redux/selectors/contacts-selectors";
import { contactsThunk } from "redux/async";
const { deleteContacts, getContacts } = contactsThunk;

export function ContactsList() {
  const contacts = useSelector(visibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    contacts.length > 0 && (
      <ul className={styles.contacts}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.contact}>
              <span>{name}</span>
              <span>{number}</span>
              <button
                className={styles.button}
                onClick={() => dispatch(deleteContacts(id))}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    )
  );
}
