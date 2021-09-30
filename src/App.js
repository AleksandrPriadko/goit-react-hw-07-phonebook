import { Component } from "react";
import AddContactForm from "./components/PhoneBookForm";
import Contacts from "./components/Contacts";

export class App extends Component {
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <div className="container">
          <AddContactForm />
          <Contacts />
        </div>
      </>
    );
  }
}

export default App;
