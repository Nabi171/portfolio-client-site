import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ShowTech = ({ project }) => {
    const { Name, id, live } = project;
    return (
        <div className='col-lg-3 col-sm-11 col-11 mx-auto col-md-4 g-4'>
            <Card.Body className='bg-black border rounded'>
                <img className='imagesforp' src={live} alt="" />

                <hr className='text-white' />
                <Card.Text>
                    <h6 className='text-white '> <span className='text-colorfrmsg'>  {Name}</span>  </h6>
                </Card.Text>

            </Card.Body>
        </div>
    );
};

export default ShowTech;