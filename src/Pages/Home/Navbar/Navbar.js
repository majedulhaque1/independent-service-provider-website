import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {signOut} from 'firebase/auth';

const MainNavbar = () => {
    const [user] = useAuthState(auth);
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
                            <Nav.Link><Link to={'/reviews'}>Reviews</Link></Nav.Link>
                            <Nav.Link><Link to={'/aboutme'}>About Me</Link></Nav.Link>
                            {user ? <button onClick={() => signOut(auth)}>Sign Out</button>
                            : <Nav.Link><Link to={'/login'}>Login</Link></Nav.Link>}
                            <Nav.Link><Link to={'/signup'}>Sign Up</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MainNavbar;