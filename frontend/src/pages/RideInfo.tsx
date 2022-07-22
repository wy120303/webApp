import React from "react";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router";

//TODO: get the id from the RideSearch page 
function getOneRide(id: number){
    fetch("http://127.0.0.1:5000/ride/"+id)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data)
    })
}

function RideInfo() {
    let navigate = useNavigate()
    return <div style={{
        backgroundImage: 'url(https://www.drivepuertorico.com/wp-content/uploads/2021/04/drivepr-car-sharing.png)',
         backgroundRepeat: "no-repeat",
         backgroundPosition: '800px 360px', minHeight:800, minWidth:500,
      }}>
         <Button variant='contained' color = "primary" onClick={() => {
          navigate("/profile"); alert("Successfully Booked")
        }}>
        Book this Ride
      </Button>
    </div>
}
export default RideInfo;