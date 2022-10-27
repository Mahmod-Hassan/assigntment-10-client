import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>

            <Row>

                <Col sm={10} md={8} className='mx-auto g-4'>
                    {/* Question no - 1 */}

                    <div className='shadow-lg p-5 bg-dark'>
                        <h1 className='text-danger'>What is Cors ?</h1>
                        <p className='fs-5 text-secondary'>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                    </div>


                    {/* Question no - 2 */}
                    <div className='shadow-lg p-5 bg-dark my-5'>
                        <h1 className='text-danger'>Why firebase use ? What are alternative of this ?</h1>
                        <p className='fs-5 text-secondary'>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            <ol>
                                There are many options that we can use insted of firebase:
                                <li>Back4App. Back4app is an open-source, relational, low-code backend platform. ...</li>
                                <li>Backendless. ...</li>
                                <li>Kuzzle. ...</li>

                            </ol>
                        </p>
                    </div>

                    {/* Question no - 3 */}
                    <div className='shadow-lg p-5 bg-dark'>
                        <h1 className='text-danger'>How does private route work ?</h1>

                        <p className='fs-5 text-secondary'>
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated that means if a user logged in.</p>
                    </div>

                    {/* Question no - 4 */}
                    <div className='shadow-lg p-5 bg-dark my-5'>
                        <h1 className='text-danger'>What is node ? How does Node work ?</h1>
                        <p className='fs-5 text-secondary'>Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl.

                            Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.</p>
                    </div>

                </Col>
            </Row>
        </Container >
    );
};

export default Blogs;