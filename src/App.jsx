import "./components/App.css";
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import Layout from "./components/Layout/Layout.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const ContactsPage = lazy(() =>
  import("./pages/ContactsPage/ContactsPage.jsx")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);

function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      <Layout>
        {isRefreshing ? (
          <b>Refreshing user...</b>
        ) : (
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegistrationPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        )}
      </Layout>
    </>
  );
}

export default App;
