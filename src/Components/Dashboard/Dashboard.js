import React, { useRef, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Dashboard = () => {
  const [date, setDate] = useState('');

  const dateInputRef = useRef(null);

  const handleChange = (e) => {

    setDate(e.target.value);

  };

    return (

        <div className='container-fluid'>
            <div className='row'>
            <div className="col-2 sidebar">
               <Sidebar/>
             </div>

                <div className="col-10">
                <div class="card-group m-4">
                <div class="card">
                  <div class="card-body">
                  <i class="fa fa-file-text-o" aria-hidden="true"></i>
                    <p class="card-text">2 Bookings made Today</p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                  <p class="card-text">2 Bookings for Today</p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                  <p class="card-text">6 Total bookings made</p>
                  </div>
                </div>
              </div>
              

               <div class="card-deck m-3">
               <div class="row">
               <div class="col-4">
  <div class="card">
  <div class="card-header bg-transparent border p-4">Latest Bookings</div>
    <div class="card-body bg-transparent border latest_bookings">
    <h5>Small Conference Room</h5>
    <h5>Date:08/06/2023</h5>
    <h5>Mallory Noman</h5>
    </div>
    <div class="card-body bg-transparent border latest_bookings">
    <h5>Small Conference Room</h5>
    <h5>Date:08/06/2023</h5>
    <h5>Mallory Noman</h5>
    </div>
    <div class="card-body bg-transparent border latest_bookings">
    <h5>Small Conference Room</h5>
    <h5>Date:08/06/2023</h5>
    <h5>Mallory Noman</h5>
    </div>
  </div>
  </div>

  <div class="col-4">
  <div class="card">
  <div class="card-header bg-transparent border p-4">Reservations</div>
  
  <div class="card-body">
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
  <div class="card-body latest_bookings">
  <h5>Small Conference Room</h5>
  <h5>Date:08/06/2023</h5>
  <h5>Mallory Noman</h5>
  </div>
  <div class="card-body latest_bookings">
  <h5>Small Conference Room</h5>
  <h5>Date:08/06/2023</h5>
  <h5>Mallory Noman</h5>
  </div>

    </div>
  </div>
  </div>

  <div class="col-4">
  <div class="card">
  <div class="card-header bg-transparent border p-4">Quick Links</div>
    <div class="card-body">
    <div class="row p-2">
    <a class="p-2" href="/booking">+ Add Booking</a>
    <a class="p-2" href="">+ Add Room</a>
    <a class="p-2" href="">View Bookings</a>
    <a class="p-2" href="">View Rooms</a>
    <a class="p-2" href="">Edit Booking Form</a>
    <a class="p-2" href="">Language Settings</a>
    <a class="p-2" href="">Back up your files</a>
    </div>
    </div>
    </div>
  </div>
</div>
</div>              
       </div>
        </div>
        </div>

    );

};

export default Dashboard;