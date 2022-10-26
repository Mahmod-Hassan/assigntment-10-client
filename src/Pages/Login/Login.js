import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
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

                    <Form className='w-75 shadow-lg px-4 py-2'>
                        <h2 className='text-center text-warning mt-0'>Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                            here i will show error text
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        {/* Google login button */}
                        <Button variant='white' className='border text-start p-0 border-secondary rounded-pill w-100'>
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
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container >
    );
};

export default Login;