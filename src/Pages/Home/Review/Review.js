import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Review.css';
const Review = ({review}) => {
    const {reviewerName, description, img} = review;
    return (
        <>
            <Col sm={10} md={6} lg={4} className="text-center g-5 mb-5">
            <Card className='shadow-lg border-0' style={{ width: 'auto' }}>
                <Card.Img className='img-style' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{reviewerName}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </>
    );
};

export default Review;