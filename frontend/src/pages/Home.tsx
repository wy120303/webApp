import React from "react";
import {useNavigate} from "react-router-dom"
import Button from '@material-ui/core/Button'
import styles from "./styles.module.css"
import { minHeight } from "@material-ui/system";

function Home() {
    let navigate = useNavigate()
    return <div style={{
        backgroundImage: 'url(https://www.drivepuertorico.com/wp-content/uploads/2021/04/drivepr-car-sharing.png)',
         backgroundRepeat: "no-repeat",
         backgroundPosition: '800px 200px', minHeight:800, minWidth:500,
      }}> 
        <header className={styles.home}>
            Welcome to Ithaca Ride Share
        </header>
    <p></p>
      <Button variant='contained' color = "primary" onClick={() => {
          navigate("/login");
        }}>
        Log In
        </Button>
        <p>
        </p>
        <Button variant='contained' color = "primary" onClick={() => {
          navigate("/register");
        }}>
        Register an Account
        </Button>

    </div>;
  }
  
export default Home;