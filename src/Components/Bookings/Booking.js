import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import { useNavigate } from "react-router-dom";
import { useBookingsQuery, useDeleteBookingMutation, useUsersQuery } from '../../rtkQuery';
import { Height } from '@mui/icons-material';


const Booking = () => {
    const navigate = useNavigate();
    const [searchBooking, setSearchBooking] = useState('');
    const { data: bookingData, error } = useBookingsQuery();
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [deleteBooking] = useDeleteBookingMutation();
    const [successMessage, setSuccessMessage] = useState("");

    
    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };
    
    useEffect(() => {
        let timer;
        if (successMessage) {
            timer = setTimeout(() => {
                setSuccessMessage("");
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [successMessage]);

    let filteredBookings = bookingData;

    const handleSearch = (event) => {
        setSearchBooking(event.target.value);
    };

    if (selectedStatus !== 'All') {
        filteredBookings = filteredBookings.filter((booking) => booking.status === selectedStatus);
    };
    // Filtering using search field
    filteredBookings = filteredBookings?.filter((response) =>
        response.title.toLowerCase().includes(searchBooking.toLowerCase())
    )

    const navigateToEditBooking = (booking) => {
        navigate(`/editbooking/${booking.id}`, { state: { booking } })
    }


    const handleDelete = (bookingId) => {
        deleteBooking(bookingId).unwrap().then((res)=>{
            setSuccessMessage("Booking deleted successfully!");
            window.location.reload();
        })
    }

    return (

        <div className='container-fluid'>
            <div className='row'>
            <div className="col-2 sidebar">
                  <Sidebar/>
                </div>

            <div className="col-10">
            <div class="row">
            <div class="col-2 p-4">
            <button type="button" class="btn btn-primary"  onClick={() => navigate("/addbooking")}>Add Booking </button>
            </div>
            <div class="col-2 p-4">
                <input type="text" name="search" class="input"  value={searchBooking}
                onChange={handleSearch} placeholder="Search" />
            </div>
          
            
            <div className="col-8 gap-2 d-md-flex justify-content-md-end" style={{"height":"50px" , marginTop:"20px"}}>
            <button
                type="button"
                class="btn btn-primary" 
                onClick={() => handleStatusChange('All')}> All
            </button>
            <button
                type="button"
                class="btn btn-primary"
                onClick={() => handleStatusChange('Pending')}>
                Pending
            </button>
            <button
                type="button"
                class="btn btn-primary" 
                onClick={() => handleStatusChange('Accepted')}>
                Accepted
            </button>
            <button
                type="button"
                class="btn btn-primary" 
                onClick={() => handleStatusChange('Cancelled')}>
                Cancelled
            </button>
        </div>
        </div>

            {filteredBookings?.length === 0 ? (
                <div>No data found.</div>
            ) : (
                <table className="table table-striped border" >
                    <thead>
                        <tr>
                            {/* <th scope="col">Image</th> */}
                            <th scope="col">Room</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Total</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {filteredBookings?.map((booking) => (
                            <tr key={booking.id}>

                                <td>{booking.title}</td>
                                <td>{booking.date}</td>
                                <td>
                                    {booking.users?.map((user) => (
                                        <div key={user.id}>{user.name}</div>
                                    ))}
                                </td>
                                <td>{booking.total}</td>
                                <td>{booking.status}</td>
                                <td>
                                    <i className='fa fa-edit ms-2' style={{ "cursor": "pointer" }} onClick={() => navigateToEditBooking(booking)}></i>
                                    <i className='fa fa-trash ms-3'  style={{"cursor":"pointer"}} onClick={() => handleDelete(booking.id)}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

             </div>

           </div>
        </div>

    );

}
                      ;

export default Booking;