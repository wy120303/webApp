import React from "react";
import Ride from '../App'


function RideSearch() {
   fetch('http://127.0.0.1:5000/ride')
  .then(response => response.json())
  .then(data => console.log(data))
    return <div>

    </div>
}
export default RideSearch;