import React from 'react';
import './Home.css';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <div className='background-image d-flex justify-content-center align-items-center'>
                <h2 className='text-info fs-1 text-center first-letter'>Learn Programming<br />
                    &   <br />
                    Be a Good Programmer....</h2>
            </div>
            <Courses></Courses>
        </div>
    );
};

export default Home;