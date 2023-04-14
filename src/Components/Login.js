import { Formik, Form, Field } from "formik";
import { EMAIL, PASSWORD } from "../config.js";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const formValidator = () => {};

  return (
    <div className="form-container">
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form onSubmit={Formik.onSubmit}>
          <label htmlFor="email">Email:</label>

          <Field
            type="email"
            id="email"
            name="Email"
            placeholder="Enter your email"
          />
          <label htmlFor="name">Password:</label>

          <Field
            type="password"
            id="name"
            name="Name"
            required
            placeholder="Enter your password"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
