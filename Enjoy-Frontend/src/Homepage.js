import React from "react";
import './Homepage.css';
import ReactPlayer from "react-player";
// import { Player } from 'video-react';
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

    // const [videoFilePath, setVideoFilePath] = useState(null);

    // const handleVideoUpload = (event) => {
    //     const [file] = event.target.files;
    //     setVideoFilePath(URL.createObjectURL(file));
    // };

    return (
        <section>

            {/* <p2>Level 1 Head-Toe Full Body Massage</p2> */}

            {/* <Player>
                <source src="./public/videos/HomepageVideo.mp4" />
            </Player>
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            /> */}

            {/* <input type='file' onChange={handleVideoUpload}/> */}


            <ReactPlayer
                className='react-player'
                width="65%"
                height="660px"
                url='https://firebasestorage.googleapis.com/v0/b/react-enjoythemomentmassage.appspot.com/o/HomepageVideo.mp4?alt=media&token=ff817a67-4187-46fd-8653-493e167729a2'
                controls={true}
            />

            <p></p>

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
