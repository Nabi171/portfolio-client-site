import React, { useState, useEffect } from 'react';
import ShowFullstack from './ShowFullstack';

const FullStackp = () => {
    const [projectsfullstack, setProjectsfullstack] = useState([]);
    useEffect(() => {
        fetch('fullstacks.json').then(res => res.json()).then(data => setProjectsfullstack(data))
    }, [])
    return (
        <div className='container'>

            <div className="row">
                {
                    projectsfullstack.map(project => <ShowFullstack
                        project={project}
                        key={project.id}
                    ></ShowFullstack>)
                }
            </div>
        </div>
    );
};

export default FullStackp;