import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

const AddBooking = () => {
  const [date, setDate] = useState('');
  const [step, setStep] = useState(1);

  const dateInputRef = useRef(null);

  const handleChange = (e) => {

    setDate(e.target.value);

  };

  const handleNextClick = () => {
    if (step === 1) {
        setStep(2);
    }
};

    return (

        <div className='container-fluid'>
            <div className='row'>
              <div className="col-2 sidebar">

                    <Sidebar/>
                </div>

                <div className="col-10">
                <div className='fs-2 ms-3 font-weight-bold'>Add a Booking</div>
                {step === 1 && (
                  <div className="row ">
                  <div className='fs-4 mb-5 mt-3 ' style={{ "font-weight": "bolder"}}>Booking Details</div>
                <form>
                <div class="form-group row mb-4">
                <label  class="col-sm-2 col-form-label">Date</label>
                <div class="col-sm-1">
                <input
                type="date"
                onChange={handleChange}
                ref={dateInputRef}
              />
                </div>
              </div>
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Rooms</label>
              <div class="col-sm-5">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Large Conference</option>
                <option>Small Conference</option>
              </select>
              </div>
              </div>
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Duaration</label>
              <div class="col-sm-5">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Half-Day</option>
                <option>Full-Day</option>
                <option>Two-Days</option>
              </select>
              </div>
              </div>
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-5">
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Pending</option>
                <option>Canceled</option>
                <option>Accepted</option>
              </select>
              </div>
              </div>
    
                    </form>
                    <div className="col-2 "></div>
                    <div className="col-10 mt-3 d-grid gap-2 d-md-flex">
                    <button className="btn btn-primary btn-lg" onClick={handleNextClick}>Next</button>
                    </div>
                </div>

                )};

                {step === 2 && (
                  <div className="row">
                      <div className='fs-4 mb-5' style={{ "font-weight": "bolder" }}>Client Details</div>
  <form>
  <div class="form-group row mb-4">
    <label  class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="name" placeholder="Name"></input>
    </div>
  </div>
  <div class="form-group row mb-4">
  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-5">
    <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
  </div>
</div>
  <div class="form-group row mb-4">
    <label for="phonenumber" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-5">
      <input type="number" class="form-control" id="phone" placeholder="Phone"></input>
    </div>
  </div>
  <div class="form-group row mb-4">
  <label for="notes" class="col-sm-2 col-form-label">Notes</label>
  <div class="col-sm-5">
    <textarea type="text" class="form-control" id="notes" placeholder="Notes"></textarea>
  </div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Company</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="Company name"></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Address</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="Address"></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">City</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="City"></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">State</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="State"></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Zip</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="Zipcode"></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Country</label>
<div class="col-sm-5">
<select class="form-control" id="exampleFormControlSelect1">
  <option>India</option>
  <option>Srilanka</option>
  <option>Pakistan</option>
  <option>Ireland</option>
</select>
</div>
</div>
 
</form>

<div class="row">
<div class="col-5">
<button type="button" class="btn btn-success">Save</button>
</div>
<div class="col-1">
<button type="button" class="btn btn-danger">Cancel</button>
</div>
</div>
  </div>
                )};

      </div>
            </div>

            </div>
    );

}

export default AddBooking;