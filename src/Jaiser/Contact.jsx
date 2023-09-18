import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './contact.css';
import { PiPhoneCallBold} from 'react-icons/pi';
import { MdLocationOn} from 'react-icons/md';

export default function Contact() {
  return (
    <section>
      <div className='container mt-5'>
        <div className='contact'>
    <Row className='row-contact1 mb-5'>
      <Col className='col2-contactr1' lg={8}>
          <h1 className='h1-contact'>CONTACT FORM</h1>
          <h4 className='h4-contact'>Get in Touch</h4>
          <p className='p1-contact'>Enter your message to reach out</p>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupName">
                      <Form.Label style={{fontWeight:'500'}}>Name</Form.Label>
                      <Form.Control type="name" placeholder="Enter your name" className='form-name'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address<span className='span-red'>*</span> </Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" className='form-email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhone">
                      <Form.Label>Phone number<span className='span-red'>*</span></Form.Label>
                      <Form.Control type="phone" placeholder="Enter your number" className='form-phone' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupComment">
                    <Form.Label>Comment or Message</Form.Label>
                    <Form.Control type="comment" placeholder="Enter your comment" className='form-message' style={{ height: '7rem' }}/>
                </Form.Group>
                <Button variant="success" className='bt-c1'>SEND</Button>
                 
          </Form>
          <hr className='hr'/>
          <div className='fb-1'>
                        <div className='ct-phone'> 
                        <PiPhoneCallBold className='phn-icon'/>
                            <div className='phn'>
                              <b>PHONE</b><br/>
                              <b style={{textDecoration:'underline', color:'green'}}> +91 96677 87882</b>
                            </div>
                       </div>  

                        <div className='ct-email'>
                                <div> <img className='phn-mail-icon' src={require("../Contactimg/mail.png")} ></img></div>
                                    <div className='email'>
                                        <b>EMAIL</b><br/>
                                       <b style={{ color:'green'}}> info@marcc.com.au</b>
                                    </div>
                        </div> 
          </div>

          <div className='fb-2 mt-4'>
          <div className='ct-location'> 
                        <MdLocationOn className='location-icon'/>
                            <div className='loc'>
                              <b>ADDRESS</b><br/>
                              <b style={{ color:'green'}}> The Estate, 8th Floor , Dickenson Road, <br/> Bangalore - 560042 </b>
                            </div>
                       </div>  
          </div>
  </Col>

  <Col className='col2-contactr2' lg={4}>
  <img className='col2-img' src={require("../Contactimg/Contactus.jpg")} ></img>
  </Col>

  </Row>
     </div>
     
  </div>
  </section>
  )
}
