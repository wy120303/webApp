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
`Departure`
`Destination`
### Response
#### HTTP Status Code 200 
A list of rides are found. 
Body: 
A list of the information of the rides, each includes:
```
Date: a string in the format of mm/dd/yyyy
Time: a string in the format of hh:mm
Departure: a string that represents a city name
Destination: a string that represents a city name
NumberOfSeats: an int
Fee: a float
AccountInfo: an instance of Account
```

## Get a specific ride
`GET/ride/{id}`
### Response
#### HTTP Status Code 200
The specific ride corresponding to the id is found.
Body:
```
RideDetails: an instance of Ride
  id: int
  Date: a string in the format of mm/dd/yyyy
  Time: a string in the format of hh:mm
  Departure: a string that represents a city name
  Destination: a string that represents a city name
  NumberOfSeats: int
  Fee: float
ContactInfo: an array of objects, contact information of the poster
  Name: a string
  Email: a string represents a valid email
  PhoneNumber: a string of numbers
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
`POST/account/{id}/ride`
### Request
Body:
```
Date: a string in the format of mm/dd/yyyy
Time: a string in the format of hh:mm
Departure: a string that represents a city name
Destination: a string that represents a city name
NumberOfSeats: int
Fee: float
AccountInfo: an instance of Account
  id: int
  Name: a string
  Email: a string represents a valid email
  PhoneNumber: a string of numbers
```

### Response
#### HTTP Status Code 200
```
RideDetails: an instance of Ride
  Id: int
  Date: a string in the format of mm/dd/yyyy
  Time: a string in the format of hh:mm
  Departure: a string that represents a city name
  Destination: a string that represents a city name
  NumberOfSeats: int
  Fee: float
AccountInfo: an instance of Account
  id: int
  Name: a string
  Email: a string represents a valid email
  PhoneNumber: a string of ints
  RideOffered: an array of Ride
  RideBooked: an array of Ride
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
`DELETE/account/{id}/ride`
### Request
Query
`id: int, the id of the ride to be deleted` **REQUIRED**
Body
`id: int, the id of the ride`
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
`POST/account`
### Request
Body:
```
Name: a string
Email: a string represents a valid email
PhoneNumber: a string of ints
Password: a string of characters, length between 6 to 20
```
### Response
#### HTTP Status Code 200
a new account has been successfully registered. 
Body:
```
AccountInfo: an instance of Account
  id: int
  Name: a string
  Email: a string represents a valid email
  PhoneNumber: a string of ints
  Password: a string of characters
  RideOffered: an array of Ride
  RideBooked: an array of Ride
```


## Log in to account
`POST/account/{id}`
### Request 
```
Email: a string of a valid, registered email
Password: a string of characters
```
### Response
#### HTTP Status Code 200
Successfully sign in.
Body:
```
AccountInfo: an instance of Account
  id: int
  Name: a string
  Email: a string represents a valid email
  PhoneNumber: a string of ints
  RideOffered: an array of Ride
  RideBooked: an array of Ride
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
`PUT/ride`
### Request
Query:
`id: int` **REQUIRED**
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
`PUT/account/{id}/ride`
### Request
Query:
`id: int` **REQUIRED**
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















