import React from "react";
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from "react-router";

function LogIn() {
    const divStyle = {
        // display: 'flex',
        alignItems: 'center',
      };
    let navigate = useNavigate();
    return (
        //TODO: send the login request
        <div style={divStyle}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{color: '#2147b0', fontSize: 20, marginTop: 40}}>
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
            Submit
        </Button>
        </Form>
        </div>
    );
}
export default LogIn;