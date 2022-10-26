
import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signInWithGoogle, loginWithEmailPassword } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Image
                        className='img-fluid'
                        src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=2000"
                        alt=''
                    ></Image>
                </Col>
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                    <div className='w-75 shadow-lg px-5 py-2'>
                        <Form onSubmit={handleLogin} >
                            <h2 className='text-center text-warning mt-0'>Login !!</h2>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name='email' type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />
                                <Form.Text className='text-danger'>{error}</Form.Text>
                            </Form.Group>

                            <Button variant="outline-primary w-50" type="submit">
                                Login
                            </Button>
                            <p className='mt-3'><small>New User ? Please <Link to='/register'>Register</Link></small></p>

                        </Form>
                        {/* Google login button */}
                        <Button onClick={handleGoogleSignIn} variant='outline-light' className='border text-start p-0 rounded-pill w-100'>
                            <Image
                                style={{ width: '40px' }}
                                src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
                                alt=''
                            ></Image>

                        </Button>

                        {/* Github Login Button */}
                        <Button variant='outline-light' className='border text-start p-0 rounded-pill w-100 my-2'>
                            <Image
                                style={{ width: '40px' }}
                                src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'
                                alt=''
                            ></Image>
                        </Button>
                    </div>

                </Col>
            </Row>
        </Container >
    );
};

export default Login;