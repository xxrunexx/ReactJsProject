// IMPORT MODULES
import React, {useState} from 'react'


// IMPORT COMPONENTS
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Modal from "../Components/RegisterEventModal";


// IMPORT ASSETS
// import '../Assets/css/style.css'
import hero from '../Assets/img/event-header.jpg'
import EventCard from '../Components/EventCard'

function EventPage() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div style={{backgroundColor: "#bbdcf1",backgroundImage: "linear-gradient(#ffffff, #bbdcf1)"}}>
            <Navbar/>
            <img
            class="img-fluid"
            id="event-page-img1"
            src={hero}
            width="400px "
            alt=""
            />
            <div style={{margin: "15px 0 15px 15px"}}>
                <p style={{ display: "inline-flex"}}>Event Saat Ini</p>
                <div id="wrappermodal">
                    <button 
                    className="openModalBtn" 
                    // className="pull-right openModalBtn" 
                    // style={{marginRight: "20px"}}
                    onClick={() => {
                        setModalOpen(true);
                        // event.preventDefault();
                    }}>
                        Create a New Event
                    </button>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>

                {/* Import EventCard from Components */}
                <EventCard/>
            </div>
            <Footer/>
        {/* Closing div tag for the first div tag, DO NOT DELETE */}
        </div>
    )
}

export default EventPage;

