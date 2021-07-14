import { useFormik } from 'formik';
import React from 'react'

const Formik = () => {
    const formik = useFormik({
        initialValues: {
          firstName: 'luu Tuan',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          console.log(formik.values.firstName)
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
    
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
    
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
    
          <button type="submit">Submit</button>
        </form>
      );
    };

export default Formik
