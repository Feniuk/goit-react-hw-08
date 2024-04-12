import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  const onContactsFilter =
    filter && filter.trim() === ""
      ? contacts.slice()
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div>
      <ul className={styles.contactList}>
        {onContactsFilter.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
