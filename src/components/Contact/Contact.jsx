import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.contactsList}>
      <div className={styles.contactListContainer}>
        <p className={styles.contactParagraph}>
          <FaUser />
          {contact.name}
        </p>
        <p className={styles.contactParagraph}>
          <FaPhone />
          {contact.number}
        </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Contact;
