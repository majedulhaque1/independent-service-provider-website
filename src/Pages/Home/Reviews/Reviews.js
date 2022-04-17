import React from 'react';
import { Container, Row } from 'react-bootstrap';
import image1 from '../../../images/doctor1.jpg';
import Review from '../Review/Review';
const Reviews = () => {
    const allreviews = [
        {id:1, reviewerName: 'Reviewer Name here', description:'Your service is awesome.And your are very good doctor.', img: image1},
        {id:2, reviewerName: 'Reviewer Name here', description:'Your service is awesome.And your are very good doctor.', img: image1},
        {id:3, reviewerName: 'Reviewer Name here', description:'Your service is awesome.And your are very good doctor.', img: image1},
    ]
    return (
        <>
            <Container>
                <div className='section-title'>
                    <h2 className='text-primary text-center my-5'>Client Reviews</h2>
                </div>
                <Row>
                    {
                        allreviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Reviews;