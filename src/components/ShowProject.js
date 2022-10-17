import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { motion } from "framer-motion"
const ShowProject = ({ project }) => {
  const { Name, id, Type, live, imageLink, description, implant } = project;

  return (
    <div className='col-lg-4 col-sm-11 mx-auto col-11 g-2  p-2 card-allog'>

      <Card.Body className='bg-black rounded border'>
        <Card.Title className="text-colorfrmsg mb-3"> <span className='text-clor-for-all'>{Name}</span> </Card.Title>
        {/* <hr className='text-white' /> */}


        <img className='imagesforp border' src={imageLink} alt="" />

        <hr className='text-white' />
        <Card.Text>
          <h6 className='text-clor-for-all '> <span className='text-clor-for-all'>{Type}</span>  </h6>
        </Card.Text>

        <button className='btn btn-outline-light'>
          <a className='text-decoration-none fw-bold text-white' href={live}>Live Demo</a>
        </button>
      </Card.Body>
    </div>
  );
};

export default ShowProject;