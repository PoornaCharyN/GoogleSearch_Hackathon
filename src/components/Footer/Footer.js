import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
<footer className="text-center text-lg-start bg-white text-mute" style={{marginBottom:'0px!important'}}>
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" className="me-4 link-secondary" >
        
        <img style={{width:'20px'}}src='https://cdn-icons-png.flaticon.com/128/1384/1384031.png' alt='image'></img>
        {/* <FontAwesomeIcon icon='fab fa-facebook-f'/> */}
      </a>
      <a href="" className="me-4 link-secondary" >
        <img style={{width:'20px'}}src='https://cdn-icons-png.flaticon.com/128/2168/2168281.png' alt=''>
        </img>
      </a>
      <a href="" className="me-4 link-secondary" >
        
      <img style={{width:'20px'}}src='https://cdn-icons-png.flaticon.com/128/4494/4494467.png' alt=''/>
      </a>
      <a href="" className="me-4 link-secondary" >
        <img style={{width:'20px'}}src='https://cdn-icons-png.flaticon.com/128/4494/4494465.png' alt=''/>
      </a>
      <a href="" className="me-4 link-secondary" >
        {/* <i className="fab fa-linkedin"></i> */}
        <FontAwesomeIcon icon="fab fa-linkedin" />
      </a>
      <a href="" className="me-4 link-secondary" >
        {/* <i className="fab fa-github"></i> */}
        <FontAwesomeIcon icon="fab fa-github" />
      </a>
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>International Hotels
          </h6>
          <p>
          is an American hospitality corporation that primarily engages in the franchising, management and ownership of upscale, mid-scale and economy hotels.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            SUPPORT
          </h6>
          <p>
            <a href="#!" className="text-reset">Manage Reservation</a>
          </p>
          <p>
            <a href="#!" className="text-reset">My Account</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Need Help?</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Shop</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            STAY
          </h6>
          <p>
            <a href="#!" className="text-reset">Special Offers</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Locations</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Meetings & Events</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Pet-Friendly Hotels</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> 4659 Blane Street</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            info@InternationalHotels.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i>314-525-6392

</p>
          <p><i className="fas fa-print me-3 text-secondary"></i>314-525-6391

</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025);"}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="/">TechTitans.com</a>
  </div>
</footer>
  )
}

export default Footer