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
## Introduce two structures:
Ride: 
id: int
date: a string in the format of mm/dd/yyyy
time: a string in the format of hh:mm
departure: a string that represents a city name
destination: a string that represents a city name
num_seats: an int
fee: a float

Account:
id: int
name: a string
email: a string represents a valid email
phone_number: a string of numbers
ride_offered: an array of Ride
ride_booked: an array of Ride


## Search for rides
`GET/ride`
### Query 
`departure`
`destination`
`time`
`user_as_poster`
`user_booked`
### Response
#### HTTP Status Code 200 
A list of rides are found. 
Body: 
```
ride: Ride
account: Account
```


## Get a specific ride
`GET/ride/{id}`
### Response
#### HTTP Status Code 200
The specific ride corresponding to the id is found.
Body:
```
ride: Ride
account: Account
```
#### HTTP Status Code 404
Ride not found.
Body:
```
Error: object
  Status: int, the error code
  Message: string
```


## Post a ride
`POST/ride`
### Request
Body:
```
ride: Ride
account: Account
```
### Response
#### HTTP Status Code 200
Body:
```
ride: Ride
account: Account
```
#### HTTP Status Code 401
Bad or expired token.
Body:
```
Error: object
  Status: int, the error code
  Message: string
```


## Delete a ride
`DELETE/ride/{id}`
### Request
Body:
```
id: int
```
### Response
#### HTTP Status Code 200
Ride removed. No longer offered. 
#### HTTP Status Code 401
Bad or expired token.
Body:
```
Error: object
  Status: int, the error code
  Message: string
```


## Register for an account
`POST/register`
### Request
Body:
```
account: Account
```
### Response
#### HTTP Status Code 200
a new account has been successfully registered. 
Body:
```
account: Account
```


## Log in to account
`POST/login`
### Request 
Body:
```
email: a string of a valid, registered email
password: a string of characters
```
### Response
#### HTTP Status Code 200
Successfully sign in.
Body:
```
account: Account
```

#### HTTP Status Code 404
User not found. Invalid email or password.
Body:
```
Error: object
  Status: int, the error code
  Message: string
```


## Comfirm a ride
`PUT/ride/{id}/confirm`
### Request
Body:
`id: int`
### Response
#### HTTP Status Code 200
Ride booked.
#### HTTP Status Code 404
Ride not found or is no longer available. 
Body:
```
Error: object
  Status: int, the error code
  Message: string
```


## Cancel booking
`PUT/ride/{id}/cancel`
### Request
Body:
`id: int` 
### Response
#### HTTP Status Code 200
Ride cancelled.
#### HTTP Status Code 404
Ridec not found or cannot cancel booking.
Body:
```
Error: object
  Status: int, the error code
  Message: string
```















