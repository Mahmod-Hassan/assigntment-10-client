import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const { createNewUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('at least 6 character need')
            return;
        }

        createNewUser(email, password)
            .then(result => {
                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
        form.reset();
    }
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Image
                        className='img-fluid'
                        src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=2000"
                        alt=''
                    ></Image>
                </Col>
                <Col md={6} className='d-flex justify-content-center align-items-center'>

                    <Form onSubmit={handleRegister} className='w-75 shadow-lg px-4 py-2'>
                        <h2 className='text-center text-primary mt-0'>Register !!</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                            <Form.Text className='text-danger'>{error}</Form.Text>
                        </Form.Group>


                        <Button variant="outline-primary w-50" type="submit">
                            Register
                        </Button>
                        <p className='mt-3'><small>Already Register ? Please <Link to='/login'>Login</Link></small></p>

                    </Form>
                </Col>
            </Row>
        </Container >
    );
};

export default Register;