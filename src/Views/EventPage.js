// IMPORT MODULES
import React from 'react'


// IMPORT COMPONENTS
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

// IMPORT ASSETS
// import '../Assets/css/style.css'
import hero from '../Assets/img/event-header.jpg'

function EventPage() {
    return (
        <div>
            <Navbar/>
            <img
            class="img-fluid"
            id="event-page-img1"
            src={hero}
            width="400px "
            alt=""
            />
            <div>
                <p style={{margin: "15px 0 15px 15px"}}>Event Saat Ini</p>
                <div>

                </div>
            </div>
            <Footer/>

        {/* Closing div tag for the first div tag, DO NOT DELETE */}
        </div>
    )
}

export default EventPage
