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
                        <CardBody>
                            <Row>
                                <Col md={5}>
                                    <div className='card-left'>
                                         <div className='facilities-heading'>
                                         <h6>Facilities</h6>
                                         <p>seemore</p>
                                         </div>
                                        <div className='facilities'>
                                            <div className='icons text-nowrap'>
                                            <FontAwesomeIcon color='lightblue' icon={faSwimmer}  />
                                                Swimming
                                            </div>
                                            <div className='icons text-nowrap'>
                                            <FontAwesomeIcon color='maroon' icon={faWifi}  />
                                                Wi-Fi
                                            </div>
                                            <div className='icons text-nowrap'>
                                            <FontAwesomeIcon color='lightgreen' icon={faSwimmer}  />
                                                AC
                                            </div>
                                            <div className='icons text-nowrap'>
                                            <FontAwesomeIcon color='orange' icon={faSwimmer}  />
                                                Dinner
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <Col md={2} style={{    marginTop: "10px"}}>
                                    <div className='card-right'>
                                    <h6 style={{    fontweight: '700'}}>Hotels For You</h6>
                                    
        <p className="card-text" style={{margin: '0px!important'}}><small className="text-muted">5 Days 6 Nights</small></p>
                                    <CardText>USD $506.00</CardText>
                                    {/* <CardText>150 Results</CardText> */}
                                    </div>
                                </Col>
                                <Col md={5}>
                                    <div className='card-right2' style={{marginLeft:'8px'}}>
                                        <div className='search'>
                                        <SearchAutoComplete/>
                                        </div>
                                        <div className='facilities'>
                                            <div className='icons text-nowrap'>
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{width: "150px"}} alt="Avatar" />
                                            </div>
                                            <div className='icons text-nowrap'>
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{width: "150px"}} alt="Avatar" />
                                            </div>
                                            <div className='icons text-nowrap'>
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{width: "150px"}} alt="Avatar" />
                                            </div>
                                            <div className='icons text-nowrap'>
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{width: "150px"}} alt="Avatar" />
                                            </div>
                                            <div className='icons text-nowrap'>
                                            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" style={{width: "150px"}} alt="Avatar" />
                                            </div>
                                        </div>
                                    </div>
                                 
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
