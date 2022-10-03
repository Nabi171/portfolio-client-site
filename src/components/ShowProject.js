import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { motion } from "framer-motion"
const ShowProject = ({ project }) => {
  const { Name, id, Type, live, imageLink, description, implant } = project;

  return (
    <div className='col-lg-4 col-sm-12 g-2 p-2 '>

      <Card.Body className='bg-clor rounded'>
        <Card.Title className="text-white "> <span className='bg-clor2'>{Name}</span> </Card.Title>
        <hr className='text-white' />

        <motion.div
          animate={{
            scale: [1, 1, 1, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        ><img className='imagesforp' src={imageLink} alt="" /></motion.div>

        <hr className='text-white' />
        <Card.Text>
          <h6 className='text-white '> <span className='bg-clor2'>Technologies :  {Type}</span>  </h6>
        </Card.Text>
        <Button variant="light">
          <a className='text-decoration-none fw-bold text-black' href={live}>Live Demo</a>
        </Button>
      </Card.Body>
    </div>
  );
};

export default ShowProject;