import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { useAddusersMutation } from "../../rtkQuery";
import { NotificationManager } from 'react-notifications';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddUser = () => {

  const navigate = useNavigate();
  const [addusers, error, isLoading] = useAddusersMutation();

  const initialValues = {
    username: '',
    email: '',
    role: '',
    status: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Name is Required'),
  email: Yup.string().email('Invalid email address').required('Email is Required'),
  role: Yup.string().required('Role is Required'),
  status: Yup.string().required('Status is Required'),
});

const handleSave = async (values, { setSubmitting }) => {
  try {
      const newUser = {
         username: values.username,
          email: values.email,
          role: values.role,
          status: values.status,
      };
      addusers(newUser).unwrap().then((res) => {
        console.log("Users", res)
        navigate('/user')
        window.location.reload();
    })

  } catch (error) {

      console.log(error);

  }

};
return(
  <div className='container-fluid'>
  <div className='row'>
    <div className="col-2 sidebar">
          <Sidebar/>
      </div>

      <div className="col-10">
      <div className='fs-2 ms-3 font-weight-bold' style={{padding: "2rem", }}>Add User</div>
        <div className="row">
          
 <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSave}>
<Form>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Name</label>
<div class="col-sm-5">
<Field type='text' className='form-control' id='username' name='username' />
<ErrorMessage name='username' component='div' className='error-msg' />
</div>
</div>
<div class="form-group row mb-4">
<label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
<div class="col-sm-5">
<Field type='email' className='form-control' id='email' name='email' />
<ErrorMessage name='email' component='div' className='error-msg' />
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Role</label>
<div class="col-sm-5">
<Field type='text' className='form-control' id='role' name='role' />
<ErrorMessage name='role' component='div' className='error-msg' />
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Status</label>
<div class="col-sm-5">
<Field type='text' className='form-control' id='status' name='status' />
<ErrorMessage name='status' component='div' className='error-msg' />
</div>
</div>

<div class="row">
<div class="col-5">
<button type="submit" class="btn btn-success">Save</button>
</div>
<div class="col-1">
<button type="button" class="btn btn-danger" onClick={()=>navigate("/user")}>Cancel</button>
</div>
</div>
</Form>
</Formik>
</div>


</div>
  </div>

  </div>
);
}

export default AddUser;