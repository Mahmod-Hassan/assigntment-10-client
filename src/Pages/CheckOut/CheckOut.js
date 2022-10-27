import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { name, description, img } = course;
    return (
        <Container className='my-5'>
            <Row>
                <Col sm={12} md={6} className='mb-sm-3'>
                    <Image
                        style={{ height: '' }}
                        className='img-fluid h-75'
                        src={img}
                    ></Image>

                </Col>
                <Col sm={12} md={6} className='text-muted d-flex justify-content-center align-items-center'>
                    <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut;