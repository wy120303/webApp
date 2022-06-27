import React from "react";
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router";
import styles from './styles.module.css'

function RidePost() {
    const divStyle = {
        // display: 'flex',
        backgroundImage: 'url(https://www.drivepuertorico.com/wp-content/uploads/2021/04/drivepr-car-sharing.png)',
         backgroundRepeat: "no-repeat",
         backgroundPosition: '800px 330px', minHeight:800, minWidth:500,
      };
    let navigate = useNavigate();
    return (
    //TODO: access the input value of the form and send the post request
    //TODO: assert the fields are completed
        <div style={divStyle}>
        <header className={styles.login}> 
        Enter the Following Information to Post Your Ride</header>
        <Form>
        <Form.Group className={styles.t} controlId="date" >
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" />
        </Form.Group>

        <Form.Group className={styles.t}  controlId="time" >
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" placeholder="yyyy-mm-dd" />
        </Form.Group>

        <Form.Group className={styles.t}  controlId="departure" >
            <Form.Label>Departure</Form.Label>
            <Form.Control type="text" placeholder="city name" />
        </Form.Group>

        <Form.Group className={styles.t} controlId="destination" >
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" placeholder="city name" />
        </Form.Group>

        <Form.Group className={styles.t} controlId="num_seats" >
            <Form.Label>Number of Seats</Form.Label>
            <Form.Control type="number" placeholder="" />
        </Form.Group>

        <Form.Group className={styles.t}  controlId="fee" >
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