import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Style.module.scss";
import { deleteContacts, getContacts } from "../../redux/async/contactsThunk";

export function ContactsList() {
  const contacts = useSelector(({ contacts }) => contacts);
  const dispatch = useDispatch();

  const { items, filter } = contacts;

  const getVisebleContacts = (allItems, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return allItems.filter(({ name, number }) => {
      const fiterNumber = String(number).includes(filter);
      return name.toLocaleLowerCase().includes(normalizedFilter) || fiterNumber;
    });
  };

  const visibleItems = getVisebleContacts(items, filter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    visibleItems.length > 0 && (
      <ul className={styles.contacts}>
        {visibleItems.map(({ id, name, number }) => {
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
