import React, { useState, useEffect } from 'react';
import ShowProject from './ShowProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => setProjects(data))
    }, [])
    return (
        <div className=''>
            <p>The total is {projects.length}</p>
            <div className="row">
                {
                    projects.map(project => <ShowProject
                        project={project}
                        key={project.id}
                    ></ShowProject>)
                }
            </div>
        </div>
    );
};

export default Projects;