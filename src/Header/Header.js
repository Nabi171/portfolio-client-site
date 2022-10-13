import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import '../Header/Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" >
                <Container>
                    <div><Navbar.Brand href="#home">Nabiul-<span className='text-danger'>Portfolio</span></Navbar.Brand>

                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='toggleme' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/mainHome">Home</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/projects">All-Projects</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/contact">Contact</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/mern">MernStacK</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/front">FrontEnd</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/tech">Technologies</NavLink >

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;