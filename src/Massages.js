import React from 'react';
import { Link } from 'react-router-dom';
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import './Massages.css';
import ReactPlayer from "react-player";


function Massages() {
    return (
        <div className='Massages'>

            <h1>Massages</h1>

            <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
            <Link to="/Booking" className='link'> <TbCalendar className='icons' icon="Booking" size="30" /> </Link>
            <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>

            <div>
                <div className='level1'>

                <h2 className='levelHeader'>Level 1 </h2>
                <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />
                <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />
                <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />

                </div>

                <div className='level2'>

                <h2 className='levelHeader'>Level 2 </h2>
                <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />
                <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />
                <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />

                </div>

                <div className='level3'>

                <h2 className='levelHeader'>Level 3 </h2>
                <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />
                <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />
                <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />

                </div>

            </div>

        </div>
    );
}

export default Massages;