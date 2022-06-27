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

// const getRides = async (): Promise<Ride[]> =>
//   await (await fetch('http://127.0.0.1:5000/ride')).json();

// function getUserInfo(user: User){

// }

// function book_a_ride(user_id: number, chosen_ride: Ride){

// }

// function delete_a_ride(user: User, chosen_ride: Ride ){

// }

// function login(email: string, password: string){

// }

// function register(name: string, email: string, password: string, phone_number: string){

// }

// function post_a_ride(user_id: User,date: string, departure: string, destination: string, num_seats: string, fee: number){

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
        <Route path="/ride/{id}" element={<RideInfo/>} />
        <Route path="/post" element={<RidePost/>} />
        <Route path="/profile/:usesid" element={<Profile/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/option" element={<SearchorPost/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
