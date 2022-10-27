import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './Header.css'
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import { useState } from 'react';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState();
    const [toggole, setToggole] = useState(true);
    const navigate = useNavigate();

    const showImage = () => {
        setDisplayName(user.displayName);
    }

    const handleDarkOrLight = () => {
        setToggole(!toggole);
    }
    const handleLogOut = () => {
        logOut()
            .then(result => {
                navigate('/');
            })
    }
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
                        {
                            user?.uid ?
                                <>
                                    <Navbar.Text>
                                        <Link className='text-primary'>
                                            {(displayName)?.toUpperCase()}
                                        </Link>
                                    </Navbar.Text>

                                    <Button variant='outline-dark me-3' onClick={handleLogOut}>
                                        LogOut
                                    </Button>

                                    <Image
                                        roundedCircle
                                        style={{ height: '30px' }}
                                        src={user.photoURL}
                                        alt=""
                                        onClick={showImage}
                                    ></Image>
                                </>

                                :

                                <>
                                    <Navbar.Text><Link to='/login'>Login</Link></Navbar.Text>
                                    <Navbar.Text><Link to='/register'>Register</Link></Navbar.Text>
                                    <FaUserAlt></FaUserAlt>
                                </>
                        }

                        {
                            toggole ?
                                <Button
                                    onClick={handleDarkOrLight}
                                    variant='text-dark rounded-pill bg-white ms-2'
                                >Light
                                </Button>
                                :
                                <Button
                                    onClick={handleDarkOrLight}
                                    className='bg-dark rounded-pill ms-2'
                                >
                                    Dark
                                </Button>
                        }

                    </Nav>
                    {/* navbar anchor tag container end*/}

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;