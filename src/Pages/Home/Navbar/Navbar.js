import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {signOut} from 'firebase/auth';

const MainNavbar = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='custom-background-color'>
            <Navbar className='custom-background-color sticky-top' bg="" expand="lg">
                <Container>
                    <Navbar.Brand>Well Madicare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-items ms-auto">
                            <Nav.Link ><Link className='link-style' to={'/'}>Home</Link></Nav.Link>
                            <Nav.Link ><Link className='link-style' to={'/services'}>Services</Link></Nav.Link>
                            <Nav.Link ><Link className='link-style' to={'/blogs'}>Blogs</Link></Nav.Link>
                            <Nav.Link ><Link className='link-style' to={'/reviews'}>Reviews</Link></Nav.Link>
                            <Nav.Link ><Link className='link-style' to={'/aboutme'}>About Me</Link></Nav.Link>
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