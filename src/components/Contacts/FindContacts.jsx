import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/app-actions";
import styles from "./Style.module.scss";

export function FindContacts() {
  const value = useSelector(({ contacts }) => contacts.filter);
  console.log(value);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    return dispatch(changeFilter(event.target.value));
  };

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

// export class FindContacts extends Component {
//   render() {
//     const { filter, handleFilter } = this.props;

//     return (
//       <div>
//         <h3>Find contacts by name</h3>
//         <input
//           type="text"
//           name="query"
//           value={filter}
//           required
//           onInput={handleFilter}
//           className={styles.input}
//           autoComplete="off"
//         />
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   handleFilter: (event) => dispatch(changeFilter(event.target.value)),
// });

// export default connect(null, mapDispatchToProps)(FindContacts);
