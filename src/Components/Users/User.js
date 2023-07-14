import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDeleteRoomMutation, useRoomsQuery } from "../../rtkQuery";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { Box } from "@mui/material";
import { useDeleteUserMutation, useGetusersQuery } from "../../rtkQuery";

const User = () => {
    const {data, error} = useGetusersQuery();
    const [searchUser, setSearchUser] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const navigate = useNavigate();
    const[deleteUser] = useDeleteUserMutation();
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


    let filteredUsers = data;

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    const handleSearch = (event) => {
        setSearchUser(event.target.value);
    };

    if (selectedStatus !== 'All') {
        filteredUsers = filteredUsers.filter((user) => user.status === selectedStatus);
    }

    filteredUsers = filteredUsers?.filter((response) =>
        response.username.toLowerCase().includes(searchUser.toLowerCase())
    )

    
    const navigateToEditUser = (user) => {
        navigate(`/edituser/${user.id}`, { state: { user } })
    }

    const handleDelete = (userId) => {
        deleteUser(userId).unwrap().then((res)=>{
            setSuccessMessage("User deleted successfully!");
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
            <button type="button" class="btn btn-primary"  onClick={() => navigate("/adduser")}>Add Users</button>
            </div>
            <div class="col-2 p-4">
                <input type="text" name="search" class="input"  value={searchUser}
                onChange={handleSearch} placeholder="Search" />
            </div>
            </div>
            {filteredUsers?.length === 0 ? (
                <div>No data found.</div>
            ) : (
                <table className="table table-striped border">
                    <thead>
                        <tr>
                            {/* <th scope="col">Image</th> */}
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers?.map((user) => (
                            <tr key={user.id}>

                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>
                                <i className='fa fa-edit ms-2' style={{ "cursor": "pointer" }} onClick={() => navigateToEditUser(user)}></i>
                                    <i className='fa fa-trash ms-3'  style={{"cursor":"pointer"}} onClick={() => handleDelete(user.id)}></i>
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

export default User;