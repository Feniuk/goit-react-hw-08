import clsx from "clsx";
import styles from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

const getNavLinkClassName = ({ isActive }) => {
  return clsx(styles.link, { [styles.active]: isActive });
};

export const AuthNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink className={getNavLinkClassName} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
