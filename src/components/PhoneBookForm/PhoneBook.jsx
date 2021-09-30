import { Component } from "react";
import { connect } from "react-redux";
import Form from "./PhoneBookForm";
import { addContact } from "../../redux/app-actions";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class Phonebook extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <Form
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(addContact(data)),
});

export default connect(null, mapDispatchToProps)(Phonebook);
