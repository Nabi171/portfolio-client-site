import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import '../Technologies/Technologies.css';
import ShowTech from './ShowTech';

const Technologies = () => {
    const [techs, setTechs] = useState([]);
    useEffect(() => {
        fetch('technologies.json').then(res => res.json()).then(data => setTechs(data))
    }, [])

    return (
        <div className='container'>

            <FontAwesomeIcon className='fa-code mx-auto' icon={faCode} />

            <div className='row'>

                {
                    techs.map(project => <ShowTech
                        project={project}
                        key={project.id}
                    ></ShowTech>)
                }

            </div>
        </div>
    );
};

export default Technologies;