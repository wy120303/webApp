import React from "react";
import {useNavigate} from "react-router-dom"
import Button from '@material-ui/core/Button'
import './SearchOrPost.css'

function SearchorPost() {
    let navigate = useNavigate()
    return <div> 
        <header style={{color: '#2147b0', fontSize: 40, marginTop: 100}}>
            Ithaca Ride Share
        </header>
    <p></p>
      <Button variant='contained' color = "primary"  onClick={() => {
          navigate("/post");
        }}>
        Post a Ride
      </Button>
      <p></p>
      <Button variant='contained' color = "primary" href='/ride  onClick={() => {
          navigate("/ride");
        }}'>
        Search for Rides
      </Button>
      <p></p>
        </div>
        }

export default SearchorPost;