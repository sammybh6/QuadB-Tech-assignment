import React from 'react'

export default function Bookings() {

    //get booking data from local storage
    const data = JSON.parse(localStorage.getItem('data')) || []
    console.log(data)

  return (
    <div>
        {data.map((item, index) => (
            <div key={index}>
                <h2>{item.name}</h2>
                <h3>{item.time}</h3>
                <h3>{item.tickets}</h3>
            </div>
        ))
        }
    </div>
  )
}
