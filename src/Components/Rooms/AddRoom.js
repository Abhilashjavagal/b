import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { useAddroomsMutation } from '../../rtkQuery';

const AddRoom = () => {

    const titleChangeHandler =
        (e) => {
            setTitle(e.target.value)
    };

    const capacityChangeHandler =
        (e) => {
        setCapacity(e.target.value)
    };

     const descriptionChangeHandler =
        (e) => {
       setDescription(e.target.value)
    };

    const priceperdayChangeHandler =
       (e) => {
          setPricePerDay(e.target.value)
     };

     const statusChangeHandler =
     (e) => {
        setStatus(e.target.value)
   };

   const navigate = useNavigate();
   const [title, setTitle] = useState('');
   const [capacity, setCapacity] = useState('');
   const [description, setDescription] = useState('');
   const [bookfor, setBookFor] = useState([]);
   const [priceperday, setPricePerDay] = useState('');
   const [status, setStatus] = useState('');
   const [addRooms, error, isLoading] = useAddroomsMutation()
   const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        let timer;
        if (successMessage) {
            timer = setTimeout(() => {
                setSuccessMessage("");
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [successMessage]);


    const handleAddRoom = (e) => {
        e.preventDefault();
        const newRoom = {
            title,
            capacity: parseInt(capacity),
            description,
            bookfor,
            priceperday,
            status
        };
        addRooms(newRoom).unwrap().then((res) => {
            console.log("Rooms", res)
            setSuccessMessage("Room added successfully!");
            navigate('/room')
            window.location.reload();
        })
    }

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setBookFor((prevSelectedOptions) => [...prevSelectedOptions, value]);
        } else {
            setBookFor((prevSelectedOptions) =>
                prevSelectedOptions.filter((option) => option !== value)
            );
        }
    };

    return (

        <div className='container-fluid'>
            <div className='row'>
              <div className="col-2 sidebar">

                    <Sidebar/>
                </div>

                <div className="col-10">
                {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
                <div className='fs-2 ms-3 font-weight-bold'>Add a Room</div>
              
                  <div className="row">
                    
  <form>
    <div class="form-group row mb-4">
      <label  class="col-sm-2 col-form-label">Title</label>
      <div class="col-sm-5">
      <input type="text" class="form-control" id="name" placeholder="Name" value={title} onChange={titleChangeHandler}></input>
    </div>
  </div>
    <div class="form-group row mb-4">
     <label for="phonenumber" class="col-sm-2 col-form-label">Capacity</label>
     <div class="col-sm-5">
    <input type="number" class="form-control" id="cpacity" placeholder="Cpacity" value={capacity} onChange={capacityChangeHandler}></input>
   </div>
   </div>
    <div class="form-group row mb-4">
<label  class="col-sm-2 col-form-label">Description</label>
<div class="col-sm-5">
<textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" value={description}  onChange={descriptionChangeHandler} ></textarea>
</div>
    </div>
    <div class="form-group row mb-4">
    <label  class="col-sm-2 col-form-label">Book For</label>
    </div>
    <div className="col-10 mb-4">
    <input className=""
    type="checkbox"
    value="multipledays"
    checked={bookfor.includes("multipledays")}
    onChange={handleCheckboxChange}
    />
   <label className="ms-2 fs-5">Multiple-days</label>
   <input className="ms-4"
    type="checkbox"
    value="halfday"
    checked={bookfor.includes("halfday")}
    onChange={handleCheckboxChange}
   />
   <label className="ms-2 fs-5">Half-day</label>
   <input className="ms-4"
    type="checkbox"
    value="hour"
    checked={bookfor.includes("hour")}
    onChange={handleCheckboxChange}
   />
   <label className="ms-2 fs-5">Hour</label>
   </div>
   <div class="form-group row mb-4">
   <label  class="col-sm-2 col-form-label">Price Per Day</label>
   <div class="col-sm-5">
  <input type="number" class="form-control" id="price" placeholder="Price" value={priceperday}  onChange={priceperdayChangeHandler}></input>
   </div>
  </div>
  <div class="form-group row mb-4">
        <label  class="col-sm-2 col-form-label">Status</label>
        <div class="col-sm-5">
        <select class="form-control" id="exampleFormControlSelect1" value={status} onChange={statusChangeHandler}>
        <option>Select Option</option>
        <option>Active</option>
         <option>InActive</option>
         </select>
         </div>
         </div>
 
 </form>

    <div class="row">
   <div class="col-5">
    <button type="button" class="btn btn-success" onClick={handleAddRoom}>Save</button>
   </div>
    <div class="col-1">
    <button type="button" class="btn btn-danger" onClick={()=>navigate("/room")}>Cancel</button>
    </div>
   </div>
    </div>
          

      </div>
            </div>

            </div>
    );

}

export default AddRoom;