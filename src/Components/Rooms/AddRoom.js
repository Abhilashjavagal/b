import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { useAddroomsMutation } from '../../rtkQuery';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddRoom = () => {

    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [addRooms, error, isLoading] = useAddroomsMutation()

    
  const initialValues = {
    title: '',
    capacity: '',
    description:'',
    bookfor: '',
    priceperday:'',
    status:'',
    image:'',
 };

    const validationSchema = Yup.object({
        title: Yup.string().required('Room is required'),
        capacity: Yup.number().typeError('Enter numeric value only').required('Capacity is required'),
        bookfor: Yup.number().typeError('Enter numeric value only').required('Booking is required'),
        status: Yup.string().required('Status is required'),
        priceperday: Yup.number().typeError('Enter numeric value only').required('Price per day is required'),
        description: Yup.string().required('Description is required'),
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
      
      };

    const handleSave = async (values) => {
        try {
            const newRoom = {
                title: values.title,
                capacity: values.capacity,
                description: values.description,
                bookfor: values.bookfor,
                priceperday: values.priceperday,
                status: values.status
            };
            addRooms(newRoom).unwrap().then((res) => {
                console.log("Rooms", res)
                navigate('/room')
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
                <div className='fs-2 ms-3 font-weight-bold'>Add a Room</div>
              
                  <div className="row">
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSave} >      
     <Form>
    <div class="form-group row mb-4">
      <label  class="col-sm-2 col-form-label">Title</label>
      <div class="col-sm-5">
      <Field type="text" className="form-control" id="title" name="title"/>
      <ErrorMessage name="title" component="div" className="error-msg" />
    </div>
  </div>
    <div class="form-group row mb-4">
     <label for="phonenumber" class="col-sm-2 col-form-label">Capacity</label>
     <div class="col-sm-5">
     <Field  type="text" className="form-control"  id="capacity"  name="capacity"/>
    <ErrorMessage  name="capacity"  component="div"  className="error-msg"/>
   </div>
   </div>
    <div class="form-group row mb-4">
  <label  class="col-sm-2 col-form-label">Description</label>
  <div class="col-sm-5">
  <Field as="textarea" className="form-control" id="description" name="description"/>
  <ErrorMessage name="description" component="div" className="error-msg"/>
</div>
    </div>
    <div class="form-group row mb-4">
    <label  class="col-sm-2 col-form-label">Book For</label>
    <div class="col-sm-5">
    <Field  type="text"  className="form-control" id="bookfor"  name="bookfor"/>
    <ErrorMessage  name="bookfor" component="div"  className="error-msg"/>
    </div>
    </div>
   <div class="form-group row mb-4">
   <label  class="col-sm-2 col-form-label">Price Per Day</label>
   <div class="col-sm-5">
   <Field  type="text"  className="form-control" id="priceperday"  name="priceperday"/>
   <ErrorMessage  name="priceperday" component="div"  className="error-msg"/>
   </div>
  </div>
  <div class="form-group row mb-4">
        <label  class="col-sm-2 col-form-label">Status</label>
        <div class="col-sm-5">
        <Field type="text" className="form-control" id="status"  name="status"/>
       <ErrorMessage  name="status" component="div"  className="error-msg" />
         </div>
         </div>
    <div class="row">
   <div class="col-5">
    <button type="submit" class="btn btn-success" >Save</button>
   </div>
    <div class="col-1">
    <button type="button" class="btn btn-danger" onClick={()=>navigate("/room")}>Cancel</button>
    </div>
   </div>
   </Form>
   </Formik>
    </div>
          
      </div>
            </div>

            </div>
    )
}

export default AddRoom;