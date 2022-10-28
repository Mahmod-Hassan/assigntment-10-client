import React from 'react';
import Pdf from 'react-to-pdf';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { HiOutlineDownload } from 'react-icons/hi';


const CourseDetails = () => {
    const course = useLoaderData();
    const { img, description, name, id } = course;
    const ref = React.createRef();
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [9, 9]
    };

    return (
        <Container className='my-5'>

            <Row>

                <Col sm={12} md={9} className='mb-sm-3'>

                    <Row
                        className='border border-secondary p-2'
                        ref={ref}
                    >

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

                    <Pdf targetRef={ref} filename="course.pdf" options={options} x={.5} y={.5} scale={0.92}>
                        {({ toPdf }) => (
                            <Button onClick={toPdf} className='fs-6 w-100 rounded-0 mb-4' variant='primary'>Download Pdf <HiOutlineDownload />
                            </Button>
                        )}
                    </Pdf>



                    <Link to={`/course-checkout/${id}`}>
                        <Button className='fs-6 w-100 rounded-0' variant='primary'>Get Premium Access</Button>
                    </Link>

                </Col>

            </Row>

        </Container>
    );
};

export default CourseDetails;