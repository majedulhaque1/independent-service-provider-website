import React from 'react';
import { Container, Row } from 'react-bootstrap';
import image1 from '../../../images/person1.jpg';
import image2 from '../../../images/person2.jpg';
import image3 from '../../../images/person2.jpg';
import Review from '../Review/Review';
const Reviews = () => {
    const allreviews = [
        {id:1, reviewerName: 'John john', description:'Your service is awesome.And your are very good doctor.', img: image1},
        {id:2, reviewerName: 'kevin', description:'I am really satisfyed your service.', img: image2},
        {id:3, reviewerName: 'kevin', description:'Your sevice is very good and afordable price.', img: image3},
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