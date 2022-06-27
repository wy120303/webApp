import React from 'react';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blue, orange} from '@material-ui/core/colors'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import Register from './pages/Register';
import RideInfo from './pages/RideInfo';
import  RidePost  from './pages/RidePost';
import  RideSearch  from './pages/RideSearch';
import  SearchorPost  from './pages/SearchOrPost';

// const darkTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: blue[50],
//     }
//   },
// });


// export type Ride = {
//   id: number;
//   date: string;
//   departure: string;
//   destination: string;
//   num_seats: string;
//   fee: number;
// };


// export type User = {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   phone_number:string;
//   ride_offered: Ride[];
//   ride_booked: Ride[]
// }


function App() {
  return (
    <div className="App">
      <header className="IthacaRideShare">
      </header>    
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ride" element={<RideSearch/>} />
        <Route path="/rideinfo" element={<RideInfo/>} />
        <Route path="/post" element={<RidePost/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/option" element={<SearchorPost/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
