import styles from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const formInitialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (e, actions) => {
    dispatch(register(e));
    actions.resetForm();
  };

  const RegistrationFormSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required!"),
    email: Yup.string()
      .email("Invalid email address")
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
      validationSchema={RegistrationFormSchema}
    >
      <Form className={styles.form}>
        <div className={styles.input}>
          <label htmlFor={nameId} className={styles.label}>
            Username{" "}
          </label>
          <Field type="name" name="name" autoComplete="username" id={nameId} />
          <ErrorMessage name="name" component="span" />

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
          <ErrorMessage name="password" as="span" />
        </div>
        <button className={styles.formButton} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
