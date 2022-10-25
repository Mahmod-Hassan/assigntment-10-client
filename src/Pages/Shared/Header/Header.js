import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>

                {/* navbar title start */}
                <Navbar.Brand href="#home">
                    <img
                        src="https://miro.medium.com/max/1400/1*UvWOnSlWP7AbbOtSVUeHMg.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                        alt=''
                    />
                    Easy Learning
                </Navbar.Brand>
                {/* navbar title close*/}

                {/* responsive toggle is here*/}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    {/* navbar anchor tag container start*/}
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