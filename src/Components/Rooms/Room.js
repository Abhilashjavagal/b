import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDeleteRoomMutation, useRoomsQuery, useBookingsQuery } from "../../rtkQuery";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { Box } from "@mui/material";


const Room = () => {
    const [searchRoom, setSearchRoom] = useState('');
    const { data, error } = useRoomsQuery();
    const [deleteRoom] = useDeleteRoomMutation();
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");
    const [selectedStatus, setSelectedStatus] = useState('All');
    const { data: bookingData, error: bookingError } = useBookingsQuery();
    let  filteredRooms;

    useEffect(() => {
        let timer;
        if (successMessage) {
            timer = setTimeout(() => {
                setSuccessMessage("");
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [successMessage]);
     
    filteredRooms = data?.map((response)=> {
        const bookingsCount = bookingData?.filter((booking) => booking.title === response.title).length;
        return { ...response, bookingsCount };
    })?.filter((response) =>
        response.title.toLowerCase().includes(searchRoom.toLowerCase())
    )

    const handleSearch = (event) => {
        setSearchRoom(event.target.value);
    };
    const handleFilterChange = (status) => {
        setSelectedStatus(status);
    };
    if (selectedStatus !== 'All') {
        filteredRooms = filteredRooms.filter((room) => room.status === selectedStatus);
    };

    const handleDelete = (roomId) => {
        deleteRoom(roomId).unwrap().then((res) => {
            setSuccessMessage("Room deleted successfully!");
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
            <button type="button" class="btn btn-primary"  onClick={() => navigate("/addrooms")}>Add Rooms </button>
            </div>
            <div class="col-2 p-4">
                <input type="text" name="search" class="input"  value={searchRoom}
                onChange={handleSearch} placeholder="Search" />
            </div>

          
            <div className="col-8 gap-2 d-md-flex justify-content-md-end" style={{"height":"50px" , marginTop:"20px"}}>
            <button
                    type="button"
                    class="btn btn-primary" 
                    onClick={() => handleFilterChange('All')}> All
                </button>
                <button
                    type="button"
                    class="btn btn-primary" 
                    onClick={() => handleFilterChange('Active')}>
                    Active
                </button>
                <button
                    type="button"
                    class="btn btn-primary" 
                    onClick={() => handleFilterChange('InActive')}>
                        InActive
                </button>
               </div>
            </div>

            {filteredRooms?.length === 0 ? (
                <div>No Room found.</div>
            ) : (
                <table className="table table-striped border">
                    <thead>
                        <tr>
                        <th scope="col">Image</th>
                            <th scope="col">Room</th>
                            <th scope="col">Capacity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredRooms?.map((room) => (
                            <tr>
                            <td><img src={room.image} width={"100px"}/></td>
                                <td>{room.title}</td>
                                <td>{room.capacity}</td>
                                <td>{room.priceperday}</td>
                                <td>{room.status}</td>
                                <td>
                                    <i className='fa fa-trash ms-3' style={{ "cursor": "pointer" }}    onClick={() => handleDelete(room.id)}></i>
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

};

export default Room;