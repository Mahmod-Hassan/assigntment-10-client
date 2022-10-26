import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { img, description, name, id } = course;
    return (
        <Container>
            <Row>
                <Col sm={12} md={8}>
                    <Row>
                        <Col sm={12} md={5}>
                            <Image
                                className='img-fluid'
                                src={img}
                            ></Image>

                        </Col>
                        <Col sm={12} md={7}>
                            <p>{description}</p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={4}>
                    <Button variant='primary'>Download Pdf</Button>
                    <Button variant='primary'>Get Premium Access</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;