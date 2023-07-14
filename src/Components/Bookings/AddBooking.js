import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoomsQuery, useAddbookingMutation } from "../../rtkQuery";
import Sidebar from '../Sidebar';

const AddBooking = () => {

  const dateChangeHandler =
  (e) => {
    setDate(e.target.value)
 };

  const titleChangeHandler =
    (e) => {
      setTitle(e.target.value)
   };

   const capacityChangeHandler =
    (e) => {
     setCapacity(e.target.value)
  };

   const priceperdayChangeHandler =
    (e) => {
    setPricePerDay(e.target.value)
  };
    
  const totalChangeHandler =
    (e) => {
    setTotal(e.target.value)
  };
   
  const statusChangeHandler =
   (e) => {
    setStatus(e.target.value)
  };
     
  const nameChangeHandler =
     (e) => {
    setName(e.target.value)
   };
     
   const emailChangeHandler =
      (e) => {
       setEmail(e.target.value)
     };

     const phoneChangeHandler =
      (e) => {
       setPhone(e.target.value)
    };

    const companyChangeHandler =
     (e) => {
    setCompany(e.target.value)
    };

   const addressChangeHandler =
     (e) => {
     setAddress(e.target.value)
   };
    
   const cityChangeHandler =
    (e) => {
    setCity(e.target.value)
   }; 
          
   const stateChangeHandler =
     (e) => {
    setState(e.target.value)
  }; 

    const zipChangeHandler =
     (e) => {
     setZip(e.target.value)
   }; 

   const countryChangeHandler =
   (e) => {
    setCountry(e.target.value)
  }; 
  const [date, setDate] = useState('');
  const [step, setStep] = useState(1);
  const dateInputRef = useRef(null);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [capacity, setCapacity] = useState('');
  const [total, setTotal] = useState('');
  const [bookfor, setBookFor] = useState('');
  const [priceperday, setPricePerDay] = useState('');
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [addbooking, error, isLoading] = useAddbookingMutation()
  const [successMessage, setSuccessMessage] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const { data: roomData, error: Error } = useRoomsQuery();
  const [searchRoom, setSearchRoom] = useState('');

  useEffect(() => {
      let timer;
      if (successMessage) {
          timer = setTimeout(() => {
              setSuccessMessage("");
          }, 1000);
      }
      return () => clearTimeout(timer);
  }, [successMessage]);

  const filteredRooms = roomData?.filter((response) =>
  response.title.toLowerCase().includes(searchRoom.toLowerCase())
)

  const handleAddBooking = (e) => {
      e.preventDefault();
      const newBooking = {
          title,
          date,
          capacity: parseInt(capacity),
          total,
          bookfor,
          priceperday,
          status,
         users:[{name, phone, email,address, company, city, state, country, zip}]

      };
      addbooking(newBooking).unwrap().then((res) => {
          setSuccessMessage("Booking added successfully!");
          navigate('/booking')
          window.location.reload();
      })
  }

  const handleNextClick = () => {
    if (step === 1) {
        setStep(2);
    }
}

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
                onChange={dateChangeHandler}
                ref={dateInputRef}
              />
                </div>
              </div>
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Rooms</label>
              <div class="col-sm-5">
              <select className="form-control" value={title} onChange={titleChangeHandler}>
              <option value="">Select a Room</option>
              {filteredRooms?.map((room) => (
                  <>
                      <option value={room.title}>{room.title}</option>
                  </>

              ))}
          </select>
              </div>
              </div>
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Capacity</label>
              <div class="col-sm-5">
              <input type="number" class="form-control" id="cpacity" placeholder="Cpacity" value={capacity} onChange={capacityChangeHandler}></input>
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
                         <label  class="col-sm-2 col-form-label"></label>
                    <div className="col-5 mb-4">
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
              <label  class="col-sm-2 col-form-label">Price Per Day</label>
              <div class="col-sm-5">
              <input type="number" class="form-control" id="price" placeholder="Price" value={priceperday} onChange={priceperdayChangeHandler}></input>
              </div>
              </div>
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Total</label>
              <div class="col-sm-5">
               <input type="number" class="form-control" id="price" placeholder="Total"  value={total} onChange={totalChangeHandler}></input>
                </div>
                 </div>
              <div class="form-group row mb-4">
              <label  class="col-sm-2 col-form-label">Status</label>
              <div class="col-sm-5">
              <select class="form-control" id="exampleFormControlSelect1" value={status} onChange={statusChangeHandler}>
                <option>Status</option>
                <option>Pending</option>
                <option>Accepted</option>
                <option>Cancelled</option>
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
      <input type="text" class="form-control" id="name" placeholder="Name" value={name} onChange={nameChangeHandler}></input>
    </div>
  </div>
  <div class="form-group row mb-4">
  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-5">
    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" value={email} onChange={emailChangeHandler}></input>
  </div>
</div>
  <div class="form-group row mb-4">
    <label for="phonenumber" class="col-sm-2 col-form-label">Phone</label>
    <div class="col-sm-5">
      <input type="number" class="form-control" id="phone" placeholder="Phone" value={phone} onChange={phoneChangeHandler}></input>
    </div>
  </div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Company</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="Company name" value={company} onChange={companyChangeHandler}></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Address</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="Address" value={address} onChange={addressChangeHandler}></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">City</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="City" value={city} onChange={cityChangeHandler}></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">State</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="State" value={state} onChange={stateChangeHandler}></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Zip</label>
<div class="col-sm-5">
  <input type="text" class="form-control" id="name" placeholder="Zipcode" value={zip} onChange={zipChangeHandler}></input>
</div>
</div>
<div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Country</label>
<div class="col-sm-5">
<select class="form-control" id="exampleFormControlSelect1" value={country} onChange={countryChangeHandler}>
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
<button type="button" class="btn btn-success" onClick={handleAddBooking}>Save</button>
</div>
<div class="col-1">
<button type="button" class="btn btn-danger"  onClick={() => navigate("/booking")}>Cancel</button>
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