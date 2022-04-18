import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import image1 from '../../../images/doctor1.jpg';
import image2 from '../../../images/doctor2.jpg';
import image3 from '../../../images/doctor3.jpg';
import Service from '../Service/Service';
const Services = () => {
    const services = [
        { id: 1, servicesName: 'Oral Hygening', img: image1 },
        { id: 2, servicesName: 'Labratory Test', img: image2 },
        { id: 3, servicesName: 'Health and lifeStyle', img: image3 }
    ]
    return (
        <div>
            <Container className=''>
                <div className='section-title'>
                    <h2 className='text-center my-5 text-primary'>Our Services</h2>
                </div>
                <Row className=''>
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                </Row>
            </Container>
        </div>
    );
};

export default Services;