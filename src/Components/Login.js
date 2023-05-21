import { Formik, Form, Field } from "formik";
import { EMAIL, PASSWORD } from "../config.js";
// import { useState } from "react";
import * as Yup from "yup";

const Login = () => {
  // const [email, setEmail] = useState("");

  const validator = Yup.object({
    email: Yup.string().email("Email is invalid").required(),
    password: Yup.string()
      .min(8, "Password Must be 8 character long")
      .required(),
  });

  return (
    <div className="form-container">
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={validator}
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
