import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={10} md={6} lg={4} className="text-center g-5 mb-5">
                        <Card className='shadow-lg border-0' style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title className='text-primary mb-4'>Defference between athorization and athentication?</Card.Title>
                                <Card.Text>Athorization is verifying prosess for specific application and identify users.Athorization and athentication both are use for verifying user and validate user.If authorize user then access to the website.Athorization is a security process.</Card.Text>
                                <Card.Text>Authentication is use for validate a user identify.Athorization and athentication both are use for verifying user and validate user.Athentication is security prosess.That means user valid or invalid checked.If user authenticate then access website.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={10} md={6} lg={4} className="text-center g-5 mb-5">
                        <Card className='shadow-lg border-0' style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title className='text-primary mb-4'>Why we use firebase? What others options do we have to implement authentication.</Card.Title>
                                <Card.Text>We use firebase authentication becuase firebase is secure and relaiable.Firebase provide realtime database.And fire base is scale able.</Card.Text>
                                <Card.text>We have others options for authentication.
                                    Example:MongoDb, Okta.
                                </Card.text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={10} md={6} lg={4} className="text-center g-5 mb-5">
                        <Card className='shadow-lg border-0' style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title className='text-primary mb-4'>What other Service dose firebase provide other than authentication?</Card.Title>
                                <Card.Text>Firebase provide good secure database.And firebase provide realtime database.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Blogs;