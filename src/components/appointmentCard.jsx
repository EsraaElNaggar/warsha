import React from 'react'

export default function AppointmentCard(props) {
    let {day,time} = props
    return (
        <div class="appointment-board">
        <p class="booking-day">{day}</p>
        <ul class="appointments-times">
            {time.map((t,index)=>{
                if(t.isAvalible){
                    return(
                        <li key={index}>{t.value}</li>
                    )
                }
                return(
                <li key={index}><del>{t.value}</del></li>
                )
            })}
        </ul>
        <button class="booking-btn">Book</button>
    </div>
    )
}
