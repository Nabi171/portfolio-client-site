import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='card mt-5 border'>
                <img src="https://i.ibb.co/19XqzWn/40404-removebg-preview.png" className='w-50 mx-auto bounce' alt="" />
            </div>
            <Link to='/mainHome'>
                <button className='btn btn-outline-light mt-3'>

                    Return Home

            </button>
            </Link>
        </div>
    );
};

export default NotFound;