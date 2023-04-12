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
          <label htmlFor="name">Name:</label>

          <Field type="text" id="name" name="Name" placeholder="Mike" />

          <label htmlFor="email">email:</label>

          <Field
            type="email"
            id="email"
            name="Email"
            placeholder="mike@yahoo.com"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
