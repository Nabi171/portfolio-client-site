import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ShowFrontProjects = ({ project }) => {
    const { Name, id, Type, live, imageLink, gitLink, description, implant } = project;
    return (
        <div className='col-lg-8 mx-auto col-md-10 col-sm-10 col-9 g-2 p-2 '>

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
                <hr className='text-white' />
                <h6 className='text-white '> <span className='text-danger'>Links</span>  </h6>
                <div className='d-flex justify-content-between mt-3'>
                    <Button variant="light">
                        <a className='text-decoration-none fw-bold text-black' href={live}>Client-Side</a>
                    </Button>
                    <Button variant="light" className='ms-1'>
                        <a className='text-decoration-none fw-bold text-black' href={gitLink}>GitHub</a>
                    </Button>

                </div>
            </Card.Body>
        </div>
    );
};

export default ShowFrontProjects;