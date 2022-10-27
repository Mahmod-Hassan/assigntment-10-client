import React from 'react';
import { Image } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <Image
                src='https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg'
                className='img-fluid'
            >
            </Image>
            <Courses></Courses>
        </div>
    );
};

export default Home;