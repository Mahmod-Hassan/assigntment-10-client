import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <Image
                className='img-fluid'
                style={{ height: '80vh', width: '60%' }}
                src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000'
                alt='404 image'
            ></Image>
            <br />
            <Link to='/'><Button>Go to the home page</Button></Link>
        </div>
    );
};

export default NotFound;