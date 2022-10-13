import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ShowFullstack = ({ project }) => {
    const { Name, id, Type, live, imageLink, description, implant, client, server } = project;
    return (
        <div className='col-lg-8 mx-auto col-sm-12 g-2 p-2 '>

            <Card.Body className='bg-dark rounded'>
                <Card.Title className="text-white "> <span className='text-white'>{Name}</span> </Card.Title>
                <hr className='text-white' />

                <img className='imagesforp' src={imageLink} alt="" />

                <hr className='text-white' />
                <Card.Text>
                    <h6 className='text-white '> <span className='text-white'>Technologies :  {Type}</span>  </h6>
                </Card.Text>
                <Button variant="light">
                    <a className='text-decoration-none fw-bold text-black' href={live}>Live Demo</a>
                </Button>

                <hr className='text-white' />
                <h6 className='text-white '> <span className='text-white'>GitHub Links</span>  </h6>
                <div className='d-flex justify-content-between mt-3'>
                    <Button variant="light">
                        <a className='text-decoration-none fw-bold text-black' href={client}>Client-Side</a>
                    </Button>
                    <Button variant="light">
                        <a className='text-decoration-none fw-bold text-black' href={server}>Server-Side</a>
                    </Button>

                </div>
            </Card.Body>
        </div>
    );
};

export default ShowFullstack;