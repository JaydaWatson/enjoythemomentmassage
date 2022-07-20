import React from "react";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Homepage";
import Massages from "./Massages";
import Booking from "./Booking";
import Contact from "./Contact";
import BookingInfo from "./BookingInfo";
import AppointmentBooked from "./AppointmentBooked";

function App() {
  return (
    <div>

      <Router>

        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/Massages" element={<Massages />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/BookingInfo" element={<BookingInfo/>}/>
          <Route path="/Booking/AppointmentBooked" element={<AppointmentBooked/>}/>

        </Routes>

      </Router>

    </div>
  );
}





export default App;
