import React from "react";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router";
import { text } from "body-parser";

//TODO: how to access user's info, need to add a get/user route?

const text_style = {
  color: '#2147b0', fontSize: 20, marginTop: 30
}
function Profile() {
    let navigate = useNavigate()
    return <div>
        <header style = {{color:'#2147b0', fontSize: 30, fontWeight: "bold", marginTop: 40}}> Profile </header>
         <p style={text_style}> User Name: </p>
         <p style={text_style}> Email: </p>
         <p style={text_style}> Posted Rides: </p>
         <p style={text_style}> Booked Rides: </p>
         <p></p>
      <Button variant='contained' color = "primary"  onClick={() => {
          navigate("/post");
        }}>
        Post a New Ride
      </Button>
      <p></p>
      <Button variant='contained' color = "primary" onClick={() => {
          navigate("/ride");
        }}>
        Search for New Rides
      </Button>
      <p></p>
    </div>
}
export default Profile;