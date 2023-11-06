import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'react-bootstrap';
import "./hotelSearch.css"

const HotelSearchPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='card'>
                        <CardBody>
                            <Row>
                                <Col md={4}>
                                    <div className='card-left'>
                                        <h6>Facilities</h6>
                                        <div className='facilities'>
                                            <div className='icons'>
                                            <FontAwesomeIcon color='black' icon={faSwimmer}  />
                                                Swimming
                                            </div>
                                            <div className='icons'>
                                            <FontAwesomeIcon color='black' icon={faWifi}  />
                                                Wi-Fi
                                            </div>
                                            <div className='icons'>
                                            <FontAwesomeIcon color='black' icon={faSwimmer}  />
                                                AC
                                            </div>
                                            <div className='icons'>
                                            <FontAwesomeIcon color='black' icon={faSwimmer}  />
                                                Dinner
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <Col md={6}>
                                    {/* <div className='card-right'>
                                    <h6>Hotels For You</h6>
                                    <CardSubtitle>5 Days 6 Nights</CardSubtitle>
                                    <CardText>USD $506.00</CardText>
                                    <CardText>150 Results</CardText>
                                    </div> */}
                                </Col>
                            </Row>


                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HotelSearchPage;
