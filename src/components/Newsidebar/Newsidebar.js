import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Link } from 'react-router-dom';

import {
    faBars,
    faTimes,
    faCogs,
    faTable,
    faList,
    faUser,
    faHome,
    faProjectDiagram,
    faCommentSms,
    faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import '../Newsidebar/Newsidebar.css';
const Newsidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleTrigger = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className="page">


                <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
                    <div className="trigger" onClick={handleTrigger}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </div>
                    <NavLink className="sidebar-position" to='/'>
                        <FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                    </NavLink>
                    <NavLink className="sidebar-position" to='/projects'>
                        <FontAwesomeIcon icon={faProjectDiagram} />
                        <span>All Projects</span>
                    </NavLink>
                    <NavLink className="sidebar-position" to='/mern'>
                        <FontAwesomeIcon icon={faList} />
                        <span>MernStack</span>
                    </NavLink>
                    <NavLink className="sidebar-position" to='/frontEnd'>
                        <FontAwesomeIcon icon={faBars} />
                        <span>FrontEnd</span>
                    </NavLink>
                    <NavLink className="sidebar-position" to='/tech'>
                        <FontAwesomeIcon icon={faLaptopCode} />
                        <span>Technologies</span>
                    </NavLink>
                    <NavLink className="sidebar-position" to='/contact'>
                        <FontAwesomeIcon icon={faCommentSms} />
                        <span>Contact</span>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default Newsidebar;