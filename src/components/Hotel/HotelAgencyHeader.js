import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import "./hotelAgencyHeader.css";
import backgroundImage from "../../images/main_bg3.jpg"; //

export const HotelAgencyHeader = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
    position: "relative"
  };

  return (
    <div fluid style={sectionStyle}>
      <Row className="align-items-center justify-content-center hotel-landing-page " style={sectionStyle}>
        <Col md={6}>
          <div className='test1'>
            <h1 className="text-center">Enjoy Your Dream Vacation</h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend, libero vel malesuada.</p>
          </div>
          <div className='test2' style={{ display: 'flex', alignItems: 'center' }}>
            <div  style={{
             width: '40px',
             height: '40px',
             border: '1px solid #fff',
             borderRadius: '50%',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             marginRight: '10px'
          }}>
            <FontAwesomeIcon color='black' icon={faCoffee}  />
            </div>
         
            <p style={{ margin: 0 , color:"green" }}>Warwick Hotels & Resorts</p>
          </div>
        </Col>
        <Col md={6}></Col>
      </Row>
    </div>
  );
};
