import "./components/App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  // const savedContacts =
  //   JSON.parse(window.localStorage.getItem("saved-contacts")) ||
  //   initialContacts;
  // const [contacts, setContacts] = useState(savedContacts);
  // const [filter, setFilter] = useState("");

  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = (id) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== id);
  //   });
  // };

  // const findContact = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
