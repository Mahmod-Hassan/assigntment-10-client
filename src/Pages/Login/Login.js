
import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

    const googleProvider = new GoogleAuthProvider();

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                console.log(result.user);

            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
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
                                {/* <Form.Text className="text-muted">
                            here i will show error text
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="outline-primary w-50" type="submit">
                                Login
                            </Button>
                            <p className='mt-3'><small>New User ? Please <Link to='/register'>Register</Link></small></p>

                        </Form>
                        {/* Google login button */}
                        <Button onClick={handleGoogleSignIn} variant='white' className='border text-start p-0 border-secondary rounded-pill w-100'>
                            <Image
                                style={{ width: '40px' }}
                                src='https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
                                alt=''
                            ></Image>
                        </Button>

                        {/* Github Login Button */}
                        <Button variant='white' className='border text-start p-0 border-secondary rounded-pill w-100 my-2'>
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