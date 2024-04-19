import React from "react";
import { Formik, Form, Field, } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-mui";
import { Button } from "@mui/material";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{firstName: "", lastName: "", email: "", password: ""}}
      validationSchema={Yup.object({
        firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
        lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().min(8, "Must be 8 characters or more").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 400)
      }}
    >
      {({submitForm, isSubmitting}) => (
        // <form onSubmit={handleSubmit}>
        //   <label htmlFor="firstName">firstName</label>
        //   <input id="firstName" name="firstName" type="text" onBlur={handleBlur} onChange={handleChange} value={values.firstName} />
        //   {touched.firstName && errors.firstName && <div id="firstNameError">{errors.firstName}</div>}

        //   <label htmlFor="lastName">lastName</label>
        //   <input id="lastName" name="lastName" type="text" onBlur={handleBlur} onChange={handleChange} value={values.lastName} />
        //   {touched.lastName && errors.lastName && <div id="lastNameError">{errors.lastName}</div>}

        //   <label htmlFor="email">email</label>
        //   <input id="email" name="email" type="email" onBlur={handleBlur} onChange={handleChange} value={values.email} />
        //   {touched.email && errors.email && <div id="emailError">{errors.email}</div>}

        //   <label htmlFor="password">password</label>
        //   <input id="password" name="password" type="password" onBlur={handleBlur} onChange={handleChange} value={values.password} />
        //   {touched.password && errors.password && <div id="passwordError">{errors.password}</div>}

        //   <button type="submit">Submit</button>
        // </form>
        <Form>
          {/* <label htmlFor="firstName">firstName</label> */}
          <Field name="firstName" type="text" label="firstName" component={TextField} />
          {/* <ErrorMessage name="firstName"></ErrorMessage> */}
          <br />
          {/* <label htmlFor="lastName">lastName</label> */}
          <Field name="lastName" type="text" label="lastName" component={TextField} />
          {/* <ErrorMessage name="lastName"></ErrorMessage> */}
          <br />
          {/* <label htmlFor="email">email</label> */}
          <Field name="email" type="email" label="email" component={TextField} />
          {/* <ErrorMessage name="email"></ErrorMessage> */}
          <br />
          <Field name="password" type="password" label="password" component={TextField}></Field>
          <br />
          <Button
            type="submit"
            variant="contained"
            onClick={submitForm}
            disabled={isSubmitting}
          >
            submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SignupForm