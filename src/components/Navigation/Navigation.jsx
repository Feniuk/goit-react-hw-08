import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(styles.link, { [styles.active]: isActive });
};

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className={styles.nav}>
        <NavLink className={getNavLinkClassName} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={getNavLinkClassName} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
