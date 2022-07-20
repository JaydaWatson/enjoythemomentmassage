import React from 'react';
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