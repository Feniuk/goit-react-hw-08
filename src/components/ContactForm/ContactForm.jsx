import styles from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";

const formInitialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };

  const contactFormSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required!"),
    number: Yup.string()
      .min(3, "Number is too short!")
      .max(50, "Number is too long!")
      .required("Number is required!"),
  });

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
    >
      <Form className={styles.form}>
        <div className={styles.input}>
          <label className={styles.label} htmlFor={nameId}>
            Username:
          </label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="p" />
        </div>
        <div className={styles.input}>
          <label className={styles.labelText} htmlFor={numberId}>
            Number:
          </label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage name="number" component="p" />
        </div>

        <button className={styles.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
