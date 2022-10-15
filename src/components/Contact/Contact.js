import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_12hw20i', 'template_vxrjxd5', form.current, 'JSvll9G-ID_UUDjhl')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                toast.success("Thanks homourable for sent me email.i will knock you soon");
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <div className='col-lg-7 col-sm-9 col-9 mx-auto mt-5'>
            <h5 className='text-colorfrmsg mx-auto fw-bold mb-3'>Write a message</h5>
            <form className='bg-dark p-5 rounded ' ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />

                <input className='btnform btn-info' type="submit" value="Send" />
                <ToastContainer />

            </form>
        </div>
    );
};

export default Contact;