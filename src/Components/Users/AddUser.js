import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { useAddusersMutation } from "../../rtkQuery";

const AddUser = () => {
 
    const usernameChangeHandler =
       (e) => {
          setUsername(e.target.value)
     };
       
     const emailChangeHandler =
       (e) => {
        setEmail(e.target.value)
     };

     const roleChangeHandler =
    (e) => {
      setRole(e.target.value)
    };

    const statusChangeHandler =
     (e) => {
      setStatus(e.target.value)
    };

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const [addusers, error, isLoading] = useAddusersMutation();
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

    const handleAddUser = (e) => {
        e.preventDefault();
        const newUser = {
            username,
            email,
            role,
            status
        };
        addusers(newUser).unwrap().then((res) => {
            console.log("Users", res)
            setSuccessMessage("User added successfully!");
            navigate('/user')
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
                {successMessage && <div className="mt-3 alert alert-success">{successMessage}</div>}
                <div className='fs-2 ms-3 font-weight-bold' style={{padding: "2rem", }}>Add User</div>
              
                  <div className="row">
                    
  <form>
  <div class="form-group row mb-4">
    <label  class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="name" placeholder="Name" value={username}  onChange={usernameChangeHandler} ></input>
    </div>
  </div>
  <div class="form-group row mb-4">
  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-5">
    <input type="email" class="form-control" id="inputEmail3" placeholder="Email" value={email}  onChange={emailChangeHandler} ></input>
  </div>
</div>
<div class="form-group row mb-4">
    <label  class="col-sm-2 col-form-label">Role</label>
    <div class="col-sm-5">
      <input type="text" class="form-control" id="name" placeholder="Role" value={role}  onChange={roleChangeHandler} ></input>
    </div>
  </div>
  <div class="form-group row mb-4">
  <label  class="col-sm-2 col-form-label">Status</label>
  <div class="col-sm-5">
  <select class="form-control" id="exampleFormControlSelect1" value={status}  onChange={statusChangeHandler} >
    <option>Pending</option>
    <option>Canceled</option>
    <option>Accepted</option>
  </select>
  </div>
  </div>
</form>

<div class="row">
<div class="col-5">
<button type="button" class="btn btn-success" onClick={handleAddUser}>Save</button>
</div>
<div class="col-1">
<button type="button" class="btn btn-danger" onClick={()=>navigate("/user")}>Cancel</button>
</div>
</div>
  </div>
          

      </div>
            </div>

            </div>
    );

}

export default AddUser;