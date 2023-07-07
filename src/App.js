import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Sidebar from './Components/Sidebar';
import AddBooking from './Components/Bookings/AddBooking';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Room from './Components/Rooms/Room';
import Booking from './Components/Bookings/Booking';
import AddRoom from './Components/Rooms/AddRoom';
import User from './Components/Users/User';
import AddUser from './Components/Users/AddUser';
import UserRooms from './UserModule/UserRooms';
import UserBooking from './UserModule/UserBooking';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/room" element={<Room />} />
        <Route path="/addbooking" element={<AddBooking />} />
        <Route path="/addrooms" element={<AddRoom />} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/user" element={<User />} />
        <Route path="/adduser" element={<AddUser/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/userrooms" element={<UserRooms />} />
        <Route path="/userbooking" element={<UserBooking />} />
      </Routes>
</div>
  );
};

export default App;