import { Formik, Form, Field } from "formik";

const Signup = () => {
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

          <Field type="password"  id="name" name="Name" required placeholder="Enter your password"  />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
