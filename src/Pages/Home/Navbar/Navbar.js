import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavbar = () => {
    return (
        <div>
            <Navbar bg="" expand="lg">
                <Container>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link><Link to={'/services'}>Services</Link></Nav.Link>
                            <Nav.Link><Link to={'/blogs'}>Blogs</Link></Nav.Link>
                            <Nav.Link><Link to={'/aboutme'}>About Me</Link></Nav.Link>
                            <Nav.Link><Link to={'/login'}>Login</Link></Nav.Link>
                            <Nav.Link><Link to={'/signup'}>Sign Up</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MainNavbar;