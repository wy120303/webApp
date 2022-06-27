import React from "react";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router";
import { text } from "body-parser";
import styles from "./styles.module.css"

//TODO: how to access user's info, need to add a get/user route?

const text_style = {
  color: '#2147b0', fontSize: 20, marginTop: 30
}
function Profile() {
    let navigate = useNavigate()
    return <div style={{
        backgroundImage: 'url(https://www.drivepuertorico.com/wp-content/uploads/2021/04/drivepr-car-sharing.png)',
         backgroundRepeat: "no-repeat",
         backgroundPosition: '800px 300px', minHeight:800, minWidth:500,
      }}>
        <header  className={styles.login} style={{marginTop:100}}> Profile </header>
         <p className={styles.t}> User Name: </p>
         <p className={styles.t}> Email: </p>
         <p className={styles.t}> Posted Rides: </p>
         <p className={styles.t}> Booked Rides: </p>
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