import React from 'react'
import "../styles/Modal.css"
import { useNavigate } from 'react-router-dom'
export default function Modal(props) {

    const navigate = useNavigate()
    if(!props.show){
        return null
    }
    const [ticketCount, setTicketCount] = React.useState(1)
    const sumbitHandler = (e) => {
        e.preventDefault()
        //store data in local storage 
        const data = {
            name: props.data.name,
            time: props.data.schedule.time,
            tickets: ticketCount,
        }
        const oldData = JSON.parse(localStorage.getItem('data')) || []
        oldData.push(data)
        localStorage.setItem('data', JSON.stringify(oldData))
        props.onClose()
        navigate('/bookings')
        console.log(data)
    }
  return (
    <div className='modal'>
        <div className='modal-card'>
        <div className='header'>
        <h2>Booking Form</h2>
        <button className='close-btn' onClick={props.onClose}>X</button>
        
        
            
        </div>
        <form>
            <div className="form-group">
            <label htmlFor="email1" className='label'>Show</label>
            <input type="email" className="input"  disabled value={props.data.name} />
            </div>
            <div className="form-group">

            <label htmlFor="email1" className='label'>Time</label>
            <input type="email" className="input"  disabled value={props.data.schedule.time} />
            </div>
            <div className="form-group">
            <label htmlFor="email1" className='label'>Number of Tickets</label>
            <input type="number" className="input" name='ticketCount' onChange={(e)=>setTicketCount(e.target.value)}/>
            </div>
            <button className='btn' type='Submit' onClick={sumbitHandler}>BOOK</button>
        </form>
        
        
        </div>
        </div>
        


  )
}
