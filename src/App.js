import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Sidebar from './Components/Sidebar';
import AddBooking from './Components/Bookings/AddBooking';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Room from './Components/Rooms/Room';
import Booking from './Components/Bookings/Booking';
import EditBooking from './Components/Bookings/EditBooking';
import AddRoom from './Components/Rooms/AddRoom';
import EditRoom from './Components/Rooms/EditRoom'
import User from './Components/Users/User';
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser'
import UserRooms from './UserModule/UserRooms';
import UserBooking from './UserModule/UserBooking';
import UserConfirmation from './UserModule/UserConfirmation';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/addbooking" element={<AddBooking />} />
        <Route path="/editbooking/:id" element={<EditBooking />}></Route>
        <Route path="/room" element={<Room />} />
        <Route path="/addrooms" element={<AddRoom />} />
        <Route path="/editroom/:id" element={<EditRoom />}></Route>
        <Route path="/user" element={<User />} />
        <Route path="/adduser" element={<AddUser/>} />
        <Route path="/edituser/:id" element={<EditUser/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userrooms" element={<UserRooms />} />
        <Route path="/confirmation" element={<UserConfirmation/>} />
        <Route path="/userbooking/:id" element={<UserBooking />} />
      </Routes>
</div>
  );
};

export default App;