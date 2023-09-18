import React from 'react'
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiTwotoneStar } from 'react-icons/ai'; 
import { BsBook } from 'react-icons/bs'; 

import './about.css';

export default function About() {
  return (
 <section >
<div className='container-fluid p-0 ' >
      
      <img src={require("../Aboutimg/Rectangle 4620.png")} style={{ height: '90vh',width:'100%',margin:'0',padding:'0' }}></img>
      <h2 className='ab1-h1'><span className='sp-1'>W</span>e are the best company for your business ready to take your Brand sky high .</h2>
      <Button variant="success" className='bt-1'>Learn More</Button>
{/*book4*/}         <div className='designbook-4'><BsBook/></div>
{/*book5*/}         <div className='designbook-5'><BsBook/></div>
{/*circle1*/}       <div className='designcircle designcircle-1'></div>
</div>
 <div className="container ab-ct1">
      {/*book2*/}         <div className='designbook-2'><BsBook/></div>
      <Container>
       <Row className='ab-r1'>
            <Col className='ab-colr1' md={4} lg={4}>
              <h2 className='mb-4'style={{fontWeight:'850'}}>About Senchola!</h2>
              <p style={{color:'gray',fontWeight:'650'}}>
              We are deeply invested in helping businesses focus on business, so our services are designed to be hassle-free. We adapt to your organization structure through freelancing or outsourcing, relieving you of the roadblocks that inhibit your company's growth.</p>
              
               <p style={{color:'gray',fontWeight:'650'}}>No matter the scale of your needs, we outsource the exact number of business professionals or processes your company needs for success. Our services grow easily with your business, ensuring your evolving needs are met.</p>
 
              <p style={{color:'gray',fontWeight:'650'}}>Our professional resources and outsourcing services give your company the breadth and depth it needs to scale with speed from a single partner, Let your business needs fall on our broad expertise to drive growth.</p>
              <Button variant="success" className='bt-2'>View More</Button>
            </Col>


            <Col className='ab-colr2'md={8} lg={8} >
         
            <img className='img1-c2r1 img-fluid' src={require("./Aboutimg/Rectangle 4621.png")} alt="" />
            <img className='img2-c2r1 img-fluid' src={require("./Aboutimg/Rectangle 4622.png")} alt="" />
            <img className='img3-c2r1 img-fluid' src={require("./Aboutimg/Rectangle 4623.png")} alt="" />
         
            </Col>
       </Row>
       </Container>
{/*book1*/}        <div className='designbook-1'><BsBook/></div>
      <div className='about-container1' style={{textAlign:'center'}} >
        
{/*book3*/}         <div className='designbook-3'><BsBook/></div>
{/*circle2*/}       <div className='designcircle designcircle-2'></div>
          <h3 className='mt-3' style={{color:'green', fontWeight:'900'}}>GLOBAL MANAGED SERVICES</h3>
          <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ipsum, fugit distinctio iure iusto tempora.<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, minima.
          </p>
      </div>
       {/* First 3 cards are below */}
       <div className='ab-card123'>
            <div className='ab-card1'>
               <h3>Marketing</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolore adipisci, veniam ut facere a veritatis similique distinctio eius placeat laborum dolorum facilis officiis aspernatur quod quam iste. Veritatis, ipsa.</p>
               <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Customer Service</p>
               <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Technical Support</p>
               <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Sales</p>
               <p className='p-c1'style={{ textAlign: 'right' }}> VIEW ALL <AiOutlineArrowRight /></p>

            </div >
            <div className='ab-card2'>
               <h3>Sales Agency</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolore adipisci, veniam ut facere a veritatis similique distinctio eius placeat laborum dolorum facilis officiis aspernatur quod quam iste. Veritatis, ipsa.</p>
               <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Business Development</p>
               <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Sales Development</p>
               <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Appoinment Setting</p>
               <p className='p-c1'style={{ textAlign: 'right' }}> VIEW ALL <AiOutlineArrowRight /></p>

            </div>
            <div className='ab-card3'>
               <h3>Back Office</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolore adipisci, veniam ut facere a veritatis similique distinctio eius placeat laborum dolorum facilis officiis aspernatur quod quam iste. Veritatis, ipsa.</p>
               <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Data Entry</p>
               <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Virtual Assistants</p>
               <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Online Research</p>
               <p className='p-c1'style={{ textAlign: 'right' }}> VIEW ALL <AiOutlineArrowRight /></p>

            </div>
       </div>
       {/* Fourth and fifth cards */}
{/*circle3*/}       <div className='designcircle designcircle-3'></div>
      <div className='ab-card45'>
          <div className='ab-card4'>
            <h3>Rpo</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolore adipisci, veniam ut facere a veritatis similique distinctio eius placeat laborum dolorum facilis officiis aspernatur quod quam iste. Veritatis, ipsa.</p>
                  <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Employee</p>
                  <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Contractors</p>
                  <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Payroll</p>
                  <p className='p-c1'style={{ textAlign: 'right' }}> VIEW ALL <AiOutlineArrowRight /></p>
  
           </div>


           <div className='ab-card4'>
            <h3>Client Managed</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolore adipisci, veniam ut facere a veritatis similique distinctio eius placeat laborum dolorum facilis officiis aspernatur quod quam iste. Veritatis, ipsa.</p>
                  <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Elastic Workforce</p>
                  <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> One to several</p>
                  <p className='p-c1'><img className='img-icon' src={require("./seen.png")} alt="" /> Team Integration</p>
                  <p className='p-c1'style={{ textAlign: 'right' }}> VIEW ALL <AiOutlineArrowRight /></p>
          </div>
      </div>
  


 </div>
  <div className='container-fluid about-bottom'>
       <img src={require("../Aboutimg/Rectangle 4629.png")} style={{ height: '80vh',width:'100%',margin:'0',padding:'0' }}></img>
       <div className='container card-bt'>
           <div className='card-bt1'>
                <div className='centered-content'>
                  <img src={require("../Aboutimg/avatar-img1.jpg")} style={{ height: '7vh',width:'7vh',borderRadius:'50%'}}></img>
                  <h6 className='mt-2'>Eleveny Petun</h6>
                  <p className='p-bt1'><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/></p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum enim rem, impedit, vero quasi in dolorem unde odit atque amet dolore porro accusantium esse!</p>
                </div> 
           </div>
           <div className='card-bt2'>
                 <div className='centered-content'>
                  <img src={require("../Aboutimg/avatar-img2.jpeg")} style={{ height: '7vh',width:'7vh',borderRadius:'50%'}}></img>
                  <h6 className='mt-2'>Lenny Roria</h6>
                  <p className='p-bt1'><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/></p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum enim rem, impedit, vero quasi in dolorem unde odit atque amet dolore porro accusantium esse!</p>
                  </div>
           </div>
           <div className='card-bt3'>
                  <div className='centered-content'>
                   <img src={require("../Aboutimg/avatar-img3.jpeg")} style={{ height: '7vh',width:'7vh',borderRadius:'50%'}}></img>
                  <h6 className='mt-2'>Ronny Rossy</h6>
                  <p className='p-bt1'><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/><AiTwotoneStar/></p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum enim rem, impedit, vero quasi in dolorem unde odit atque amet dolore porro accusantium esse!</p>
                  </div>
           </div>

      </div>  


  </div>
  

  </section>
  )
}
