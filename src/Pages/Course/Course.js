import React from 'react';
import { Col, Card, Button, CardGroup } from 'react-bootstrap';

const Course = ({ course }) => {
    const { id, name, description, img } = course;

    return (
        <Col md={6}>
            <CardGroup>
                <Card key={id}>
                    <Card.Img
                        className='bg-light p-3'
                        height='200'
                        variant="top"
                        src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 120) + '...'}
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
            </CardGroup>

        </Col>


    );
};

export default Course;