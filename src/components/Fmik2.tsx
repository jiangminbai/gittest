import React, { useEffect } from 'react';
 import { Formik, useFormik, FormikTouched, FieldConfig, FormikValues } from 'formik';
 import * as Yup from 'yup';
 import { TextField } from "@mui/material";
import axios from 'axios';

 interface Values {
  firstName: string;
  lastName: string;
  email: string;
 }
 const SignupForm = () => {
  useEffect(() => {
    axios.get('https://d78ab341-3701-4cc7-b408-d0819177212e.mock.pstmn.io/table/list', {
      data: {
        page: 1
      }
    }).then(res => {
      console.log(res.data.data)
    })
  }, [])
  const formik = useFormik({
    initialValues: { firstName: '', lastName: '', email: '' },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  })
  const getFieldProps = (name: keyof Values) => ({
    ...formik.getFieldProps(name),
    error: Boolean(formik.touched[name] && formik.errors[name]),
    helperText: (formik.touched[name] && formik.errors[name])
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      {/* <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null} */}
      <TextField
      label={'First Name'}
      type='text'
      {...getFieldProps('firstName')}
      // error={Boolean(formik.touched.firstName && formik.errors.firstName)}
      // helperText={formik.touched.firstName && formik.errors.firstName}
      ></TextField>

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        {...formik.getFieldProps('lastName')}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
   );
 };

 export default SignupForm