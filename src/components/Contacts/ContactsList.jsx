//import { Component } from "react";
//import { connect } from "react-redux";
import styles from "./Style.module.scss";
import { deleteContact } from "../../redux/app-actions";
import { deleteContacts } from "../../redux/async/contactsThunk";

function ContactsList({ contacts, deleteContact }) {
  const state = useSelector((state) => state.state);
  const getVisebleContacts = (allItems, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return allItems.filter(
      ({ name, number }) =>
        name.toLocaleLowerCase().includes(normalizedFilter) ||
        number.includes(filter)
    );
  };

  const mapStateToProps = (state) => {
    const { items, filter } = state.contacts;
    const visibleItems = getVisebleContacts(items, filter);
    return { contacts: visibleItems };
  };
  return (
    <ul className={styles.contacts}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.contact}>
            <span>{name}</span>
            <span>{number}</span>
            <button className={styles.button} onClick={() => deleteContact(id)}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
}

// class ContactsList extends Component {
//   render() {
//     const { contacts, deleteContact } = this.props;

//     return (
//       <ul className={styles.contacts}>
//         {contacts.map(({ id, name, number }) => {
//           return (
//             <li key={id} className={styles.contact}>
//               <span>{name}</span>
//               <span>{number}</span>
//               <button
//                 className={styles.button}
//                 onClick={() => deleteContact(id)}
//               >
//                 X
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

const getVisebleContacts = (allItems, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  return allItems.filter(
    ({ name, number }) =>
      name.toLocaleLowerCase().includes(normalizedFilter) ||
      number.includes(filter)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const visibleItems = getVisebleContacts(items, filter);
  return { contacts: visibleItems };
};

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
