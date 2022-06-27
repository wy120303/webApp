import { JSXElement } from "@babel/types";
import React from "react";
import Ride from '../App' 

function getRides(){
    //TODO: this is still not working, always getting an empty array
    let result: any[]
    result = []
    fetch("http://127.0.0.1:5000/ride")
  .then(response => response.json())
  .then((data)=> {
    console.log(data)
    console.log(typeof data)
    result = data
  })
  return result
}

function RideSearch() {
    let rides = getRides()
    // let rides = [ 
    //     {
    //         "customer_id": null,
    //         "date": "June 1, 2022",
    //         "departure": "Ithaca",
    //         "destination": "New York",
    //         "driver_id": 123,
    //         "fee": 1000.0,
    //         "id": 1,
    //         "num_seats": 2,
    //         "time": "11:11"
    //     },
    //     {
    //         "customer_id": null,
    //         "date": "June 2, 2022",
    //         "departure": "Boston",
    //         "destination": "Washington",
    //         "driver_id": 123,
    //         "fee": 1000.0,
    //         "id": 2,
    //         "num_seats": 2,
    //         "time": "11:11"
    //     }
    // ]

    //TODO: make each ride appear in a frame and is clickable, directs to the ride info
    let rides_list = rides.map((r:any)=><li>{r.date+ " at " + r.time+' from '+ r.departure+' to ' + r.destination+" price:" + r.fee+ " seats available: " + r.num_seats}</li>
    )
    return <div>
        <header style={{color: '#2147b0', fontSize: 40, marginTop:40}}>
            Your Search Result
        </header>
        <ul style={{color: '#2147b0', fontSize: 20, marginTop:50}}>
            {rides_list}
        </ul>
    </div>
}


//    fetch("http://127.0.0.1:5000/ride")
//   .then(response => response.json())
//   .then((data)=> {
//       console.log(data)
//       let output = '<h2>Rides</h2>'
//       data.forEach(function(ride: any){
//           output+=
//             <div>
//                 <h3>${ride.date}</h3>
//                 <h3>${ride.time}</h3>
//                 <h3>${ride.departure}</h3>
//                 <h3>${ride.destination}</h3>
//                 <h3>${ride.fee}</h3>
//                 <h3>${ride.num_seats}</h3>
//             </div>
//         ;
//       }
//       ); return output;
//   })
//   return <div>
//   No Rides Found
// </div>
// }



  
export default RideSearch;