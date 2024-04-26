import { useSelector } from "react-redux";
import styles from "./AppBar.module.css";
import { UserMenu } from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
