import React from "react";
import {useNavigate} from "react-router-dom"
import Button from '@material-ui/core/Button'
import styles from './styles.module.css'

function SearchorPost() {
    let navigate = useNavigate()
    return <div style={{
        backgroundImage: 'url(https://www.drivepuertorico.com/wp-content/uploads/2021/04/drivepr-car-sharing.png)',
         backgroundRepeat: "no-repeat",
         backgroundPosition: '800px 200px', minHeight:800, minWidth:500,
      }}> 
        <header className={styles.home}>
            Ithaca Ride Share
        </header>
    <p></p>
      <Button variant='contained' color = "primary"  onClick={() => {
          navigate("/post");
        }}>
        Post a Ride
      </Button>
      <p></p>
      <Button variant='contained' color = "primary" onClick={() => {
          navigate("/ride");
        }}>
        Search for Rides
      </Button>
      <p></p>
        </div>
        }

export default SearchorPost;