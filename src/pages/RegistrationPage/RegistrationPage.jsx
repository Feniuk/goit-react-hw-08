import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div>
      <h2 className={styles.title}>Registration</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
