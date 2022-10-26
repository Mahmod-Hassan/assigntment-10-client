import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import './Header.css'
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut();
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
                                            {user.displayName}
                                        </Link>
                                    </Navbar.Text>

                                    <Button variant='outline-dark me-3' onClick={handleLogOut}>
                                        LogOut
                                    </Button>

                                    <Image
                                        style={{ height: '30px' }}
                                        src={user.photoURL}
                                        alt=""
                                    ></Image>
                                </>

                                :

                                <>
                                    <Navbar.Text><Link to='/login'>Login</Link></Navbar.Text>
                                    <Navbar.Text><Link to='/register'>Register</Link></Navbar.Text>
                                    <FaUserAlt></FaUserAlt>
                                </>
                        }

                    </Nav>
                    {/* navbar anchor tag container end*/}

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;