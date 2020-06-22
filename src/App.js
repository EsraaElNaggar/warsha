import React from "react";
import AppointmentCard from "./components/appointmentCard";

function App() {
 let list = [
   {day:"Tomorrow",
    time:[{value:"11:00am",isAvalible:true},{value:"12:00pm",isAvalible:false},{value:"1:00pm",isAvalible:true}
    ,{value:"2:00pm",isAvalible:true},{value:"4:00pm",isAvalible:false},{value:"5:00pm",isAvalible:false}]}
  ]
  return (
    <React.Fragment>
      <h1>working</h1>

      {
        list.map((item,index)=>{
          return(
            <AppointmentCard key={index} day={item.day} time={item.time}/>
          )
        })
      }
    </React.Fragment>

  );
}

export default App;
