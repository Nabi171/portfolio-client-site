import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ShowFullstack = ({ project }) => {
    const { Name, id, Type, live, imageLink, description, implant, client, server } = project;
    return (
        <div className='col-lg-8 mx-auto col-md-10 col-sm-12 col-12 g-2 p-2 '>

            <Card.Body className='bg-black rounded border'>
                <Card.Title className="text-clor-for-all "> <span className='text-clor-for-all'>{Name}</span> </Card.Title>
                {/* <hr className='text-white' /> */}

                <img className='imagesforp border mt-2' src={imageLink} alt="" />

                <hr className='text-white' />
                <Card.Text>
                    <h6 className='text-white text-start'> <span className='text-clor-for-all'>{Type}</span>  </h6>
                    <p className='text-white text-start'>{description}</p>
                    <h6 className='text-clor-for-all text-start'> <span className='text-clor-for-all'>Technologies</span>  </h6>
                    <p className='text-white text-start'> <span className=''>{implant}</span>  </p>
                </Card.Text>
                <div className='text-start'>
                    <button className='btn btn-outline-light'>
                        <a className='text-decoration-none fw-bold text-white' href={live}>Live Demo</a>
                    </button>
                </div>

                <hr className='text-white' />
                <h6 className='text-white '> <span className='text-clor-for-all'>GitHub Links</span>  </h6>
                <div className='d-flex justify-content-between mt-3'>

                    <button className='btn btn-outline-light'>
                        <a className='text-decoration-none fw-bold text-white' href={client}>Client-Side</a>
                    </button>
                    <button className='btn btn-outline-light'>
                        <a className='text-decoration-none fw-bold text-white' href={server}>Server-Side</a>
                    </button>
                </div>
            </Card.Body>
        </div>
    );
};

export default ShowFullstack;