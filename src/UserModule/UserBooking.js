import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddbookingMutation } from "../rtkQuery";

const UserBooking = () => {

  const dateChangeHandler =
  (e) => {
    setDate(e.target.value)
 };

 
const bookforChangeHandler = (e) => {
  const selectedDuration = e.target.value;
  setBookFor(selectedDuration);
  setSelectedTimeSlot('');

  const slots = generateTimeSlots(selectedDuration, date);
  setTimeSlots(slots);
};

const generateTimeSlots = (duration, date) => {
  const timeSlots = [];
  const today = new Date();
  date = today.toISOString().split('T')[0];

   if (duration === 'Hour') {
    const startTime = 1;
    const endTime = 12;
    const slotDuration = 1;

    for (let i = startTime; i <= endTime; i += slotDuration) {
      const startTime = i.toFixed(2);
      const endTime = (i + slotDuration).toFixed(2);
      const timeSlot = `${startTime}-${endTime}`;
      timeSlots.push(timeSlot);
    }
  }

  return timeSlots;
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
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  

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
                <option value="">Select Option</option>
                <option value="Multipledays">Multipledays</option>
                <option value="Halfday">Halfday</option>
                <option value="Hour">Hour</option>
              </select>
              </div>
              </div>
              {bookfor && (
                <>
                <div class="form-group row mb-4">
                    <div className="col-6 mb-4">
                    {timeSlots?.map((slot) => (
                        <button key={slot}
                         value={slot} onClick={() => setSelectedTimeSlot(slot)} className={`ms-3 me-3 mt-3 btn btn-light shadow p-3 time-slot ${selectedTimeSlot === slot ? 'selected' : ''}`}>
                                {slot}
                            
                        </button>

                    ))}
                    </div>
                    </div>
                </>
            )}
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Attendies</label>
              <div class="col-sm-5">
                <input type="number" class="form-control" id="phone" placeholder="" value={attendies} onChange={attendiesChangeHandler}></input>
              </div>
            </div>
               </form>

      <div class="row">
     <div class="col-5">
     <button type="button" class="btn btn-success"  onClick={() => navigate("/userrooms")}>Save</button>
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