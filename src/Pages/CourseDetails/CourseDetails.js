import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';


const CourseDetails = () => {
    const course = useLoaderData();
    const { img, description, name, id } = course;
    return (
        <Container className='my-5'>
            <Row>
                <Col sm={12} md={9} className='mb-sm-3'>
                    <Row className=' border border-secondary p-2'>
                        <Col sm={12} md={5} className='mb-4'>
                            <Image
                                className='img-fluid h-100 w-100'
                                src={img}
                            ></Image>

                        </Col>
                        <Col sm={12} md={7} className='text-muted d-flex justify-content-center align-items-center'>
                            <div>
                                <h2>{name}</h2>
                                <p>{description}</p>
                            </div>

                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={3}>
                    <Button className='fs-6 w-100 rounded-0 mb-4' variant='primary'>Download Pdf <HiOutlineDownload /> </Button>
                    <Link to='/checkout'>
                        <Button className='fs-6 w-100 rounded-0' variant='primary'>Get Premium Access</Button>
                    </Link>

                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;