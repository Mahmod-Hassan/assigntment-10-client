import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <Container className='mt-5'>
            <h1 className='text-primary text-center mb-4'>Our Courses</h1>
            <Row className='d-md-flex justify-content-between'>
                <Col sm={12} md={4} >
                    {
                        courses.map(course => <p
                            key={course.id}
                        >
                            <Link to={`/courses/${course.id}`}>{course.name}</Link>
                        </p>)
                    }
                </Col>
                <Col sm={12} md={8}>
                    <Row className='g-4'>
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}
                            >
                            </Course>)
                        }
                    </Row>

                </Col>
            </Row>
        </Container>

    );
};

export default Courses;