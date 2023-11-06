import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmer, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'react-bootstrap';
import "./hotelSearch.css"
import SearchAutoComplete from '../common/SearchAutoComplete';

const HotelSearchPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='card'>
                    
                            <Row>
                                <Col md={5}>
                                    <div className='card-left'>
                                        <div className='facilities-heading'>
                                            <h6>Facilities</h6>
                                            <p>seemore</p>
                                        </div>
                                        <div className='facilities'>
                                            <div className='icons text-nowrap'>
                                                <FontAwesomeIcon color='lightblue' icon={faSwimmer} />
                                                Swimming
                                            </div>
                                            <div className='icons text-nowrap'>
                                                <FontAwesomeIcon color='maroon' icon={faWifi} />
                                                Wi-Fi
                                            </div>
                                            <div className='icons text-nowrap'>
                                                <FontAwesomeIcon color='lightgreen' icon={faSwimmer} />
                                                AC
                                            </div>
                                            <div className='icons text-nowrap'>
                                                <FontAwesomeIcon color='orange' icon={faSwimmer} />
                                                Dinner
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div className='card-center'>
                                        <div>
                                            Hotels for you
                                        </div>
                                    </div>

                                </Col>
                                <Col md={5}>
                                    <div className='card-riht'>
                                        <div className='search'>
                                            <SearchAutoComplete />
                                        </div>
                                    </div>

                                </Col>
                            </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HotelSearchPage;
