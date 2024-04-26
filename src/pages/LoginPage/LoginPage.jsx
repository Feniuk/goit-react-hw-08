import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginForm.module.css";

export default function LoginPage() {
  return (
    <div>
      <h2 className={styles.title}>Registration</h2>
      <LoginForm />
    </div>
  );
}
