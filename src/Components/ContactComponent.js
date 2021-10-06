// IMPORT MODULES
import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

// IMPORT STYLES
import './styles.css'

const Result = () => {
    return(
        <p>Your message has been successfully sent. We will contact you soon.</p>
    );
}

function ContactComponent(props) {
    const [result, showResult] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gob45or', 'template_3301rct', form.current, 'user_W0bFbiJka1Tya6HTySgUy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };

    // use setTimeout to hideresult after few secs
    setTimeout(() => {
        showResult(false)
    }, 5000)

    return (
        <form className="contact-form" action="" ref={form} onSubmit={sendEmail}>
            <div className="formWord">
                <span>Full Name</span>
                <br/>
                <input
                    className="input100"
                    type="text"
                    name="fullname"
                    required
                />
                <br/>
                <span>Phone Number</span>
                <br/>
                <input
                    className="input100"
                    type="text"
                    name="phone"
                    required
                />
                <br/>
                <span>Enter Email</span>
                <br/>
                <input
                    className="input100"
                    type="text"
                    name="email"
                    required
                />
                <br/>
            </div>
            <div className="formWord">
                <span>Message</span>
                <br/>
                <textarea name="message" required></textarea>
                <br/>
                <button>SUBMIT</button>
                <div className="row">
                    {
                    result ? <Result /> : null
                    }
                </div>
            </div>
        </form>
    )
}

export default ContactComponent
