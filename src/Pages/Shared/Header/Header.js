import React from 'react';
import './Header.css'
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>

                {/* navbar title start */}
                <Navbar.Brand className='text-danger fw-bold fs-2 d-flex align-items-center'>
                    Learn
                    <Image
                        src="https://miro.medium.com/max/1400/1*UvWOnSlWP7AbbOtSVUeHMg.png"
                        width="40"
                        height="40"
                        roundedCircle
                        className="d-inline-block align-top ms-2"
                        alt=''
                    ></Image>

                </Navbar.Brand>
                {/* navbar title close*/}

                {/* responsive toggle is here*/}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    {/* navbar anchor tag container start */}
                    <Nav className="ms-auto navbar-anchor">

                        <Navbar.Text> <Link to='/'>Home</Link></Navbar.Text>

                        <Navbar.Text><Link to='/courses'>Courses</Link></Navbar.Text>

                        <Navbar.Text><Link to='/blogs'>Blogs</Link></Navbar.Text>

                        <Navbar.Text><Link to='/login'>Login</Link></Navbar.Text>
                    </Nav>
                    {/* navbar anchor tag container end*/}

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;