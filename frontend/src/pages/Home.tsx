import React from "react";
import {useNavigate} from "react-router-dom"
import Button from '@material-ui/core/Button'

function Home() {
    let navigate = useNavigate()
    return <div> 
        <header style={{color:'#2147b0', fontSize: 30, fontWeight: "bold", marginTop: 100}}>
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