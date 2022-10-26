import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'

const Course = ({ course }) => {
    const { id, name, description, img } = course;

    return (
        <Col md={6} >
            <Card key={id} style={{ height: '420px' }}>
                <Card.Img
                    className='bg-light p-3'
                    height='200'
                    variant="top"
                    src={img} />
                <Card.Body>
                    <Card.Title className='text-primary'>{name}</Card.Title>
                    <Card.Text className='text-muted'>
                        {description.slice(0, 110) + '...'}
                    </Card.Text>
                    <Link to={`/courses/${id}`}><Button variant="primary">Details <FaArrowRight></FaArrowRight></Button></Link>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Course;