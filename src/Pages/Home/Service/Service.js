import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
const Service = ({service}) => {
    const {servicesName, img} = service;
    return (
        <>
            <Col sm={10} md={6} lg={4} className="g-5 mb-5">
            <Card className='shadow-lg border-0' style={{ width: 'auto' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{servicesName}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
        </>
    );
};

export default Service;