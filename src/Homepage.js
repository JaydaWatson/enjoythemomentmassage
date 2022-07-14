import React from "react";
import './Homepage.css';
import ReactPlayer from "react-player";
import { Link } from "react-router-dom"
import { TbMassage, TbCalendar, TbHome } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";


function Header() {
    return (
        <header >
            <h1> Enjoy The Moment Massage </h1>

            <Link to="/" className='link'> <TbHome className='icons' icon="home" size="30" /> </Link>
            <Link to="/Massages" className='link'> <TbMassage className='icons' icon="Massages" size="30" /> </Link>
            <Link to="/Booking" className='link'> <TbCalendar className='icons' icon="Booking" size="30" /> </Link>
            <Link to="/Contact" className='link'> <IoMdContact className='icons' icon="Contact" size="30" /> </Link>

        </header>
    );
}

function Main() {
    return (
        <section>
            <p>Body Rubs and Intimacy</p>

            <p2>Level 1 Head-Toe Full Body Massage</p2>
            <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />
            <p></p>

            <p3>Level 2 Focusing on Tension/Stress With A Taste of Level 3</p3>
            <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />
            <p></p>

            <p4>Level 3 Make You Fall In Love Experience, Stretch Therapy, Body2Body, Up Close And Personal</p4>
            <ReactPlayer className='react-player' url="https://www.youtube.com/watch?v=VNxkfaNV5cE" />
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <p>Copyright 2022</p>
        </footer>
    );
}

function Homepage() {
    return (
        <div className="Homepage">
            <Header />

            <Main />

            <Footer />
        </div>
    );
}

export default Homepage;
