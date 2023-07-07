import React, { useState, useEffect } from 'react';
import user from "../Images/meetingroom.jpg";
import user1 from "../Images/meetingroom1.jpg";
import { useNavigate } from 'react-router-dom';

const UserRooms = () => {
    const navigate = useNavigate();
    return (

        <div className='usermodule'>
            <div className='row'>
            <div className="col-6">
            <img  class="room_image"src={user} alt=""/>
            <div className='row' >
            <div className='col-7' style={{paddingTop: "1.5rem",}}>
            <h2>Capacity : 12people</h2>
            </div>
            <div className='col-4' style={{paddingTop: "1.5rem",}}>
            <h2>Price : $789</h2>
            </div>
            </div>
         </div>

       <div className="col-6">
             <h1 style={{"color":"skyblue", paddingTop: "5rem","textAlign": "left" }}> Small Conference Room</h1>
            <div className='row user_text'>
            <h3>The Workspace gives business and mobile travelers to work privacy</h3>
            <h4>- Super fast WiFi</h4>
            <h4>- Catch up on emails</h4>
            <h4>- Printer supplied</h4>
            <h4>- Comfortable, private workspace for business travelers</h4>
            <h4>- Print off a forgotten document</h4>
            <h4>- Make a call in peace and quite</h4>
            </div>
            <button type="button" class="btn btn-primary btn-lg" onClick={()=>navigate("/userBooking")}  style={{ display:"flex", justifyItems:"start" }}>Book this room</button>
       </div>
        </div>

        <div className='row'>
        <div className="col-6">
        <img  class="room_image"src={user1} alt=""/>
        <div className='row' >
        <div className='col-7' style={{paddingTop: "1.5rem",}}>
        <h2>Capacity : 30people</h2>
        </div>
        <div className='col-4' style={{paddingTop: "1.5rem",}}>
        <h2>Price : $1289</h2>
        </div>
        </div>
     </div>

   <div className="col-6">
         <h1 style={{"color":"skyblue", paddingTop: "5rem","textAlign": "left" }}>Panoramic Room</h1>
        <div className='row user_text'>
        <h3>The Workspace gives business and mobile travelers to work privacy</h3>
        <h4>- Super fast WiFi</h4>
        <h4>- Catch up on emails</h4>
        <h4>- Printer supplied</h4>
        <h4>- Comfortable, private workspace for business travelers</h4>
        <h4>- Print off a forgotten document</h4>
        <h4>- Make a call in peace and quite</h4>
        </div>
        <button type="button" class="btn btn-primary btn-lg" onClick={()=>navigate("/userBooking")} style={{ display:"flex", justifyItems:"start" }}>Book this room</button>
   </div>
    </div>
        </div>

    );

};

export default UserRooms;