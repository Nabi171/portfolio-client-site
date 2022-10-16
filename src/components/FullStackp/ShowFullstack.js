import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ShowFullstack = ({ project }) => {
    const { Name, id, Type, live, imageLink, description, implant, client, server } = project;
    return (
        <div className='col-lg-8 mx-auto col-md-10 col-sm-11 col-11 g-2 p-2 '>

            <Card.Body className='bg-black rounded border'>
                <Card.Title className="text-white "> <span className='text-danger'>{Name}</span> </Card.Title>
                <hr className='text-white' />

                <img className='imagesforp' src={imageLink} alt="" />

                <hr className='text-white' />
                <Card.Text>
                    <h6 className='text-white '> <span className='text-danger'>{Type}</span>  </h6>
                    <p className='text-white'>{description}</p>
                    <h6 className='text-white '> <span className='text-danger'>Technologies</span>  </h6>
                    <p className='text-white '> <span className=''>{implant}</span>  </p>
                </Card.Text>
                <Button variant="light">
                    <a className='text-decoration-none fw-bold text-black' href={live}>Live Demo</a>
                </Button>

                <hr className='text-white' />
                <h6 className='text-white '> <span className='text-danger'>GitHub Links</span>  </h6>
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