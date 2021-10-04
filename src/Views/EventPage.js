// IMPORT MODULES
import React, {useState} from 'react'
import { useAuth0 } from '@auth0/auth0-react';

// IMPORT COMPONENTS
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Modal from "../Components/RegisterEventModal";


// IMPORT ASSETS
// import '../Assets/css/style.css'
import hero from '../Assets/img/event-header.jpg'
import EventCard from '../Components/EventCard'
import { Link } from 'react-router-dom';

function EventPage() {
    // const [modalOpen, setModalOpen] = useState(false);
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div style={{backgroundColor: "#bbdcf1",backgroundImage: "linear-gradient(#ffffff, #bbdcf1)"}}>
                <Navbar/>
                <img
                class="img-fluid"
                id="event-page-img1"
                src={hero}
                width="400px "
                alt=""
                />
                <div>
                    <p style={{ display: "inline-flex", margin: "15px 0 15px 15px"}}>Event Saat Ini</p>
                    <Link to="/register" className="btn btn-primary" style={{float:"right", margin:"10px 30px 15px 0"}}>Create a New Event</Link>
                    {/* TRASH */}
                    {/* <div id="wrappermodal">
                        <button 
                        className="openModalBtn" 
                        // className="pull-right openModalBtn" 
                        // style={{marginRight: "20px"}}
                        onClick={() => {
                            setModalOpen(true);
                        }}>
                            Create a New Event
                        </button>
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                    </div> */}


                    {/* Import EventCard from Components */}
                    <EventCard/>
                </div>
                <Footer/>
            {/* Closing div tag for the first div tag, DO NOT DELETE */}
            </div>
        )
    )
}

export default EventPage;

