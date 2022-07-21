import React from 'react';
import { Link } from "react-router-dom"
import { TbHome } from "react-icons/tb";
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './BookingInfo.css';

function BookingInfo() {

    
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        console.log('hey')
        axios.get('/api').then(res => {
            console.log(res.data)
            setBookings(res.data.data)

        })

    }, []
    )




    return (

        <div>

            <h1 style={{ textAlign: "center" }}>Appointments Booked</h1>

            <div className='homebutton'>
                <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            </div>

            {bookings ?
                bookings.map((book) =>

                    <div className='BookedAppointments' key={book._id}>
                        <div>
                            Name: {book.name}
                        </div>

                        <div>
                            Number: {book.number}
                        </div>

                        <div>
                            Town: {book.town}
                        </div>

                        <div>
                            State: {book.state}
                        </div>

                        <div>
                            Zip: {book.zip}
                        </div>

                        <div>
                            Date & Time: {moment(book.startDate).format('MMMM Do YYYY, h:mm:a')}
                        </div>

                        <div>
                            Level: {book.level}
                        </div>

                        <div>
                            Duration: {book.duration}
                        </div>

                        <div>
                            Vip: {book.vip}
                        </div>

                        <br/>

                    </div>

                )

                :
                <div />
            }

        </div >
    )
}

export default BookingInfo