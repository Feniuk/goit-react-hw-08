import "./components/App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect, lazy } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

const ContactsPage = lazy(() => import("./pages/ContactsPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage.jsx"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage.jsx"));

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
