import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../Contact/pick.png'
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
        <div className='container mt-5'>
            <h4 className='mx-auto fw-bold mb-3 '><span
                className='text-white' data-aos="fade-right"
            >Mess</span><span className='text-danger' data-aos="fade-left" >age Me</span></h4>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-sm-12 col-12 col-md-6'>
                    <img className='w-75 bounce' src={img} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 col-md-6'>
                    <form className='bg-black border p-5 rounded ' ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />

                        <input className='btn btn-outline-info mt-3' type="submit" value="Send" />
                        <ToastContainer />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;