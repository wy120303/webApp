import React from "react";
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router";
import styles from './styles.module.css'


function Register() {
    const divStyle = {
        backgroundImage: 'url(https://www.drivepuertorico.com/wp-content/uploads/2021/04/drivepr-car-sharing.png)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: '800px 300px', minHeight:800, minWidth:500,
      };
    let navigate = useNavigate();
    return (
        <div style={divStyle}>
            <header className={styles.login}> 
            Register an Account for Ithaca Ride Share</header>

        <Form>
        <Form.Group className={styles.t} controlId="" >
            <Form.Label>User Name </Form.Label>
            <Form.Control type="username" placeholder="Enter Your Username" />
        </Form.Group>

        <Form.Group className={styles.t} controlId="formBasicEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className={styles.t} controlId="formBasicPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className={styles.t} controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me"  />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => {
          navigate("/option");
        }} style={{color: 'white', fontSize: 20, marginTop:20, backgroundColor:'blue'}}>
            Register
        </Button>
        </Form>
        </div>
    );
}
export default Register;