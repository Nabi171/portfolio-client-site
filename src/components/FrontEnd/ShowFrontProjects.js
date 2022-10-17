import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ShowFrontProjects = ({ project }) => {
    const { Name, id, Type, live, imageLink, gitLink, description, implant } = project;
    return (
        <div className='col-lg-8 mx-auto col-md-10 col-sm-12 col-12 g-2 p-2 '>

            <Card.Body className='bg-black rounded border'>
                <Card.Title className="text-white "> <span className='text-clor-for-all'>{Name}</span> </Card.Title>
                {/* <hr className='text-white' /> */}

                <img className='imagesforp border mt-3' src={imageLink} alt="" />

                <hr className='text-white' />
                <Card.Text>
                    <h6 className='text-clor-for-all text-start'> <span className='text-clor-for-all '>{Type}</span>  </h6>
                    <p className='text-white text-start'>{description}</p>
                    <h6 className=' text-start '> <span className='text-clor-for-all'>Technologies</span>  </h6>
                    <p className='text-white text-start '> <span className=''>{implant}</span>  </p>
                </Card.Text>
                <hr className='text-white' />
                <h6 className='text-white '> <span className='text-clor-for-all'>Links</span>  </h6>
                <div className='d-flex justify-content-between mt-3'>

                    <button className='btn btn-outline-light'>
                        <a className='text-decoration-none fw-bold text-white' href={live}>Clinet-Side</a>
                    </button>

                    <button className='btn btn-outline-light'>
                        <a className='text-decoration-none fw-bold text-white' href={gitLink}>GitHub</a>
                    </button>
                </div>
            </Card.Body>
        </div>
    );
};

export default ShowFrontProjects;