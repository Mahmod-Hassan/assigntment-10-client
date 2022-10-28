import React from 'react';
import './Home.css';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        // <div>
        //     <Image
        //         src='https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg'
        //         className='img-fluid'
        //     >
        //     </Image>
        //     <Courses></Courses>
        // </div>
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