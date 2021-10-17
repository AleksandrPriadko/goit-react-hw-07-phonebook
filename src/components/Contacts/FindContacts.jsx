import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/async/contactsActions";
import { getFilterSelector } from "redux/selectors/contacts-selectors";
import styles from "./Style.module.scss";

export function FindContacts() {
  const value = useSelector(getFilterSelector);
  const dispatch = useDispatch();

  const handleFilter = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="query"
        value={value}
        required
        onInput={handleFilter}
        className={styles.input}
        autoComplete="off"
      />
    </div>
  );
}
