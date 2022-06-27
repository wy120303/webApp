import React from "react";
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router";

function RidePost() {
    const divStyle = {
        // display: 'flex',
        alignItems: 'center',
      };
    let navigate = useNavigate();
    return (
    //TODO: access the input value of the form and send the post request
    //TODO: assert the fields are completed
        <div style={divStyle}>
        <header style={{color: 'black', fontSize: 30, marginTop: 100}}> 
        Enter the Following Information to Post Your Ride</header>
        <Form>
        <Form.Group className="mb-3" controlId="date" style={{color: '#2147b0', fontSize: 20, marginTop: 20}}>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="time" style={{color: '#2147b0', fontSize: 20, marginTop:20}}>
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" placeholder="yyyy-mm-dd" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="departure" style={{color: '#2147b0', fontSize: 20, marginTop:20}}>
            <Form.Label>Departure</Form.Label>
            <Form.Control type="text" placeholder="city name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="destination" style={{color: '#2147b0', fontSize: 20, marginTop:20}}>
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" placeholder="city name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="num_seats" style={{color: '#2147b0', fontSize: 20, marginTop:20}}>
            <Form.Label>Number of Seats</Form.Label>
            <Form.Control type="number" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="fee" style={{color: '#2147b0', fontSize: 20, marginTop:20}}>
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => {
          navigate("/profile"); alert("Your ride has been successfully posted")
        }} style={{color: '#2147b0', fontSize: 20, marginTop:20}}>
            Submit
        </Button>
        </Form>
        </div>
    );
}
export default RidePost;