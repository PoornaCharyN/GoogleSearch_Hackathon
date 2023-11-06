import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./hotelAgencyHeader.css"

export const HotelAgencyHeader = () => {
  return (
    <Container fluid>
    <Row className="align-items-center justify-content-center">
      <Col md={12}>
        <h1 className="text-center">Enjoy Your Dream Vacation</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, libero vel malesuada.</p>
      </Col>
    </Row>
    </Container>
  )
}
