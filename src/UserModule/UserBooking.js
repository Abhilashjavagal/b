import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddbookingMutation } from "../rtkQuery";

const UserBooking = () => {

  const dateChangeHandler =
  (e) => {
    setDate(e.target.value)
 };

  const bookforChangeHandler =
  (e) => {
      setBookFor(e.target.value)
   };

   const attendiesChangeHandler =
   (e) => {
       setAttendies(e.target.value)
    };
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);
  const navigate = useNavigate();
  const [bookfor, setBookFor] = useState('');
  const [attendies, setAttendies] = useState('');
  const [addbooking, error, isLoading] = useAddbookingMutation()
  const [successMessage, setSuccessMessage] = useState("");

  

    return (

        <div className='user_booking'>
            <div className='row'>
              <div className="col-2">
                </div>

                <div className="col-10">
            
                  <div className="row ">
                <form>
                <div class="form-group row mb-4">
                <label  class="col-sm-2 col-form-label">Date</label>
                <div class="col-sm-1">
                <input
                type="date"
                onChange={dateChangeHandler}
                ref={dateInputRef}
              />
                </div>
              </div>
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Duaration</label>
              <div class="col-sm-5">
              <select class="form-control" id="exampleFormControlSelect1" value={bookfor} onChange={bookforChangeHandler}>
                <option>Duration</option>
                <option>Full-Day</option>
                <option>Two-Days</option>
                <option>Half-Day</option>
              </select>
              </div>
              </div>
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Attendies</label>
              <div class="col-sm-5">
                <input type="number" class="form-control" id="phone" placeholder="" value={attendies} onChange={attendiesChangeHandler}></input>
              </div>
            </div>
               </form>

      <div class="row">
     <div class="col-5">
     <button type="button" class="btn btn-success">Save</button>
     </div>
    <div class="col-1">
     <button type="button" class="btn btn-danger"  onClick={() => navigate("/userrooms")}>Back</button>
     </div>
    </div>
    </div>
             

      </div>
            </div>

            </div>
    );

}

export default UserBooking;