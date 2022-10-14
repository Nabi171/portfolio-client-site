import React, { useState, useEffect } from 'react';
import ShowFrontProjects from './ShowFrontProjects';

const FrontEnd = () => {
    const [frontprojects, setFrontprojects] = useState([]);
    useEffect(() => {
        fetch('frontstack.json').then(res => res.json()).then(data => setFrontprojects(data));
    }, [])
    return (
        <div className='container'>

            <div className="row">
                {
                    frontprojects.map(project => <ShowFrontProjects
                        project={project}
                        key={project.id}
                    ></ShowFrontProjects>)
                }
            </div>
        </div>
    );
};

export default FrontEnd;