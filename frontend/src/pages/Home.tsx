import React from "react";
import {useNavigate} from "react-router-dom"
import Button from '@material-ui/core/Button'
import './SearchOrPost.css'

function Home() {
    let navigate = useNavigate()
    return <div> 
        <header style={{color: 'black', fontSize: 40, marginTop: 100}}>
            Welcome to Ithaca Ride Share
        </header>
    <p></p>
      <Button variant='contained' color = "secondary" onClick={() => {
          navigate("/login");
        }}>
        Log In
        </Button>
        <p>
        </p>
        <Button variant='contained' color = "secondary" onClick={() => {
          navigate("/register");
        }}>
        Register an Account
        </Button>

    </div>;
  }
  
export default Home;