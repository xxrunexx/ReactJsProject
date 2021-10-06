import React from 'react'
import ContactComponent from '../Components/ContactComponent'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

function Contact() {
    return (
        <>
        <Navbar/>
            <div className="contactme" id="contact">
                <div className="contactOverlay">
                    <div className="container">
                        <div className="form-contact">
                            <ContactComponent/>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Contact
