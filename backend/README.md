# How to Set Up
1. Download the code 
2. In terminal, locate the downloaded folder 
3. Create a virtual environment using conda, virtualenv, or pipenv
4. install the requirements.txt file
5. using flask: in command line, type in 
 ``` 
   export FLASK_APP=hello
   flask run
```

# API Design Doc

## Search for rides
`GET/ride`
### Query 
`departure`
`destination`
### Response


## Get a specific ride
`GET/ride/{id}`


## Post a ride
`POST/ride`
### Request
`Date`
`Time`
`Departure`
`Destination`
`Number of Seats`
`Fee`
`Personal Information`
  `Name`
  `Email`
  `Phone Number`
  
### Response


## Delete a ride
`DELETE/account/{id}/ride/{id}`


## Register for an account
`POST/account`
### Request
  `Name`
  `Email`
  `Phone Number`
  `Password`


## Log in to account
`POST/account/{id}`
### Request 
  `Email`
  `Password`


## Comfirm a ride
`PUT/ride/{id}`


## Cancel booking
`PUT/account/{id}/ride/{id}`














