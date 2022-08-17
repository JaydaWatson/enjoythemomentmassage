import React, { useState, useEffect } from 'react';
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router';
import './Booking.css';

function Booking() {

    const nav = useNavigate()

    const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 8));

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };

    const [level, setLevels] = useState('Level 1');
    const [duration, setDuration] = useState(' 30 Minutes');
    const [vip, setVip] = useState([]);
    const [name, setName] = useState('');
    const [town, setTown] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [number, setNumber] = useState('')

    const [emessage, setMessage] = useState('')

    const validation = () => {
        if (name === '') {
            setMessage('You need to enter a name')
            return false
        } else if (number === '') {
            setMessage('You need to enter a phone number')
            return false
        } else if (town === '') {
            setMessage('You need to enter a town/city')
            return false
        } else if (state === '') {
            setMessage('You need to enter a state')
            return false
        } else if (zip === '') {
            setMessage('Youn need to enter a zip code')
            return false
        } else {
            setMessage('')
            return true
        }
    }

    const appponitmentBooked = () => {
        if (validation() === true) {
            const bookinginfo = {
                name,
                number,
                town,
                state,
                zip,
                startDate,
                level,
                duration,
                vip
            }
            if (name !== '') {
                bookinginfo.name = name
            } else if (number !== '') {
                bookinginfo.number = number
            } else if (town !== '') {
                bookinginfo.town = town
            } else if (state !== '') {
                bookinginfo.state = state
            } else {
                bookinginfo.zip = zip
            }

            const res = axios.post('/api', { bookinginfo })

            nav('./AppointmentBooked')
        }

    };

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.get('/api').then(res => {
            // console.log(res.data.data)
            setBookings(res.data.data)

        })

    }, []);

    // console.log(bookings)

    const setAlreadyBooked = bookings.map((booked) =>

        moment(booked.startDate).format()

    );

    const temp = {};

    for (const alreadybooked of setAlreadyBooked) {
        temp[alreadybooked] = true;
    }

    const uniqueAlreadyBooked = []
    for (const alreadybooked in temp) {
        uniqueAlreadyBooked.push(alreadybooked)
    }

    const results = uniqueAlreadyBooked.toString()

    // console.log (results)

    const arrDates = results.split(",");

    // console.log(splitarray)

    const [excludedTimes, setExcludedTimes] = useState([]);

    const handleSelectedDate = (date) => {
        setStartDate(date)
    }

    const getExcludedTimes = (date) => {
        let arrSpecificDates = [];
        for (let i = 0; i < arrDates.length; i++) {
            if (
                moment(date, moment.ISO_8601).format("YYYY/MM/DD") ===
                moment(arrDates[i], moment.ISO_8601).format("YYYY/MM/DD")
            ) {
                arrSpecificDates.push(moment(arrDates[i], moment.ISO_8601).toObject());
            }
        }

        let arrExcludedTimes = [];
        for (let i = 0; i < arrSpecificDates.length; i++) {
            arrExcludedTimes.push(
                setHours(
                    setMinutes(new Date(), arrSpecificDates[i].minutes),
                    arrSpecificDates[i].hours
                )
            );
            setExcludedTimes(arrExcludedTimes)
        }
    };

    // function containsDuplicates(setAlreadyBooked) {
    //     if (setAlreadyBooked.length !== new Set(setAlreadyBooked).size) {
    //         return true && new Set(setAlreadyBooked);
    //     }
    //     else {
    //         return false;
    //     }

    // }

    // const alreadybooked = [(containsDuplicates(setAlreadyBooked))]

    return (

        <div className='AppointmentBooking'>

            <div>

                <h2 className='header'>Appointment Booking</h2>
                <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
                <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
                <Link to="/Booking" className='link'> <TbCalendar className='icons' icon="Booking" size="30" /> </Link>
                <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>

                <br />
                <br />

            </div>

            <div className='datepicker'>

                <DatePicker
                    selected={new Date(startDate)}
                    onSelect={getExcludedTimes}  
                    onChange={handleSelectedDate}
                    excludeTimes={excludedTimes}
                    showTimeSelect
                    minTime={new Date(0, 0, 0, 8, 30)} //8:30am
                    maxTime={new Date(0, 0, 0, 22, 30)} //10:30pm
                    filterTime={filterPassedTime}
                    timeIntervals={70}
                    timeCaption="Time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    inline
                    
                />

            </div>

            <div className="form">

                <h4 className='Error'>{emessage}</h4>

                <div>

                    <div className='Form'>
                        <input
                            className='input'
                            type={'text'}
                            required
                            label="Name"
                            placeholder="Enter your full name"
                            onChange={(e) => setName(e.target.value)} />

                        <input
                            className='input'
                            type={'number'}
                            required
                            label="Number"
                            maxLength={10}
                            placeholder="Enter your number"
                            onChange={(e) => setNumber(e.target.value)} />

                        <input
                            className='input'
                            type={'text'}
                            required
                            label="Town"
                            placeholder="Enter your town"
                            onChange={(e) => setTown(e.target.value)} />

                        <input
                            className='input'
                            type={'text'}
                            required
                            label="State"
                            placeholder="Enter your state"
                            onChange={(e) => setState(e.target.value)} />

                        <input
                            className='input'
                            type={'number'}
                            required
                            label="Zip"
                            maxLength={5}
                            placeholder="What is your zip code"
                            onChange={(e) => setZip(e.target.value)} />
                    </div>

                </div>

            </div>

            <div className='Selectors'>
                Levels

                <div className="Levels">
                    <input
                        type="radio"
                        id="level 1"
                        value="Level 1"
                        name='levels'
                        onClick={(e) => setLevels(e.target.value)}
                    />Level 1

                    <input
                        type="radio"
                        id="level 2"
                        value="Level 2"
                        name='levels'
                        onClick={(e) => setLevels(e.target.value)}
                    />Level 2

                    <input
                        type="radio"
                        id="level 3"
                        value="Level 3"
                        name='levels'
                        onClick={(e) => setLevels(e.target.value)}
                    />Level 3
                </div>

                Duration

                <div className="Duration">
                    <input
                        type="radio"
                        id="30 minutes"
                        name="duration"
                        value="30 minutes"
                        onClick={(e) => setDuration(e.target.value)}
                    />30 minutes

                    <input
                        type="radio"
                        id=" 45 minutes"
                        name="duration"
                        value="45 minutes"
                        onClick={(e) => setDuration(e.target.value)}
                    />45 minutes

                    <input
                        type="radio"
                        id="1 hour"
                        name="duration"
                        value="1 hour"
                        onClick={(e) => setDuration(e.target.value)}
                    />1 hour

                </div>

                VIP Services

                <div className="VIPOptions">
                    <input
                        type="checkbox"
                        id="Wine"
                        name="vip"
                        value="Wine"
                        onClick={(e) => setVip([...vip, e.target.value])}
                    />Wine

                    <input
                        type="checkbox"
                        id="Hookah"
                        name="vip"
                        value="Hookah"
                        onClick={(e) => setVip([...vip, e.target.value])}
                    />Hookah

                    <input
                        type="checkbox"
                        id="Dinner"
                        name="vip"
                        value="Dinner"
                        onClick={(e) => setVip([...vip, e.target.value])}
                    />Dinner
                </div>

            </div>

            <div>
                <button className="button" onClick={appponitmentBooked} >Book Appointment</button>
            </div>

            {/* <div>

                {bookings ?
                    bookings.map((book) =>

                        <div key={book._id}>
                            Date & Time: {moment(book.startDate).format('MMMM Do YYYY, h:mm:a')}
                        </div>

                    ) :

                    <div />
                }

            </div > */}

        </div>


    );

}

export default Booking;
