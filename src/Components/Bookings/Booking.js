import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { Box } from "@mui/material";

const Booking = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the other page
    navigate('/addbooking');
  };

    return (

        <div className='container-fluid'>
            <div className='row'>
            <div className="col-2 sidebar">
                  <Sidebar/>
                </div>

            <div className="col-10">
            <div class="row">
            <div class="col-2 p-4">
            <button type="button" class="btn btn-primary"  onClick={handleButtonClick}>Add Booking </button>
            </div>
            <div class="col-2 p-4">
                <input type="text" name="search" class="input" placeholder="Search" />
            </div>
            </div>

            <table class="table">
            <thead class="thead-dark">
    <tr>
      <th scope="col">Sl.no</th>
      <th scope="col">Room</th>
      <th scope="col">Date</th>
      <th scope="col">Name</th>
      <th scope="col">Total</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Small Conference Room</td>
      <td>08/06/2023</td>
      <td>Mallory Noman</td>
      <td>$ 45.58</td>
      <td>Pending</td>
      <Box>
      <ModeEditOutlineRoundedIcon
        color="primary"
          sx={{ mr: 2, cursor: "pointer" }}
          />
           <DeleteIcon
            color="error"
             sx={{ cursor: "pointer" }}
                />
              </Box>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Small Conference Room</td>
      <td>08/06/2023</td>
      <td>Mallory Noman</td>
      <td>$ 45.58</td>
      <td>Pending</td>
      <Box>
        <ModeEditOutlineRoundedIcon
          color="primary"
            sx={{ mr: 2, cursor: "pointer" }}
            />
             <DeleteIcon
              color="error"
               sx={{ cursor: "pointer" }}
                  />
                </Box>
    </tr>
    <tr>
      <th scope="row">1</th>
      <td>Small Conference Room</td>
      <td>08/06/2023</td>
      <td>Mallory Noman</td>
      <td>$ 45.58</td>
      <td>Pending</td>
      <Box>
      <ModeEditOutlineRoundedIcon
        color="primary"
          sx={{ mr: 2, cursor: "pointer" }}
          />
           <DeleteIcon
            color="error"
             sx={{ cursor: "pointer" }}
                />
              </Box>
    </tr>
  </tbody>
</table>
             </div>

           </div>
        </div>

    );

};

export default Booking;