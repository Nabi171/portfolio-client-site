import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Technologies/Technologies.css';
const ShowTech = ({ project }) => {
    const { Name, id, live } = project;
    return (
        <div className='col-lg-3 col-sm-11 col-11 mx-auto col-md-4 g-4 '>
            <Card.Body className='bg-black border rounded'>
                <img className='imagesforp border' src={live} alt="" />

                {/* <hr className='text-white' /> */}
                <Card.Text>
                    <h6 className='text-white mt-2'> <span className='text-clor-for-all '>  {Name}</span>  </h6>
                </Card.Text>

            </Card.Body>
        </div>
    );
};

export default ShowTech;