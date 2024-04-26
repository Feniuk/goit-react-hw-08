import styles from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const formInitialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (e, actions) => {
    dispatch(logIn(e));
    actions.resetForm();
  };

  const LoginFormSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address!")
      .required("Email is required!"),
    password: Yup.string()
      .min(8, "Password is too short!")
      .max(20, "Password is too long!")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginFormSchema}
    >
      <Form className={styles.form}>
        <div className={styles.input}>
          <label htmlFor={emailId} className={styles.label}>
            Email{" "}
          </label>
          <Field
            type="email"
            name="email"
            autoComplete="email"
            placeholder="mail@gmail.com"
            id={emailId}
          />
          <ErrorMessage name="email" component="span" />

          <label htmlFor={passwordId} className={styles.label}>
            Password{" "}
          </label>
          <Field
            type="password"
            name="password"
            autoComplete="current-password"
            id={passwordId}
          />
          <ErrorMessage name="password" component="span" />
        </div>
        <button className={styles.formButton} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
