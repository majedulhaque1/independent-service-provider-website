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
                                <Card.Title>Question</Card.Title>
                                <Card.Text>andwer</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={10} md={6} lg={4} className="text-center g-5 mb-5">
                        <Card className='shadow-lg border-0' style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Question</Card.Title>
                                <Card.Text>Answer</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={10} md={6} lg={4} className="text-center g-5 mb-5">
                        <Card className='shadow-lg border-0' style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Question</Card.Title>
                                <Card.Text>Answer</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default Blogs;