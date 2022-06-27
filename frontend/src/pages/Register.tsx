import React from "react";
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router";


function Register() {
    const divStyle = {
        // display: 'flex',
        alignItems: 'center',
      };
    let navigate = useNavigate();
    return (
        <div style={divStyle}>
            <header style = {{color:'#2147b0', fontSize: 30, fontWeight: "bold", marginTop: 40}}> 
            Register an Account for Ithaca Ride Share</header>

        <Form>
        <Form.Group className="mb-3" controlId="" style={{color: '#2147b0', fontSize: 20, marginTop: 20}}>
            <Form.Label>User Name </Form.Label>
            <Form.Control type="username" placeholder="Enter Your Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{color: '#2147b0', fontSize: 20, marginTop: 20}}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" style={{color: '#2147b0', fontSize: 20, marginTop:20}}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" style={{color: '#2147b0', fontSize: 20, marginTop:20}} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => {
          navigate("/option");
        }} style={{color: '#2147b0', fontSize: 20, marginTop:20}}>
            Register
        </Button>
        </Form>
        </div>
    );
}
export default Register;