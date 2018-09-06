import React from  'react'
import { Row, Image, Col, Grid } from 'react-bootstrap'
import heroBG from '../../img/heroBG-2.png'
import title from '../../img/Title.png'
import { Link } from 'react-scroll';

const Hero = () => (
    <div className="container-flex">
        <Image src={heroBG} responsive className="hero-image"/>
        <div  className="text-center hero-text">
            <Grid>
                <Row>
                    <Col lg={8} lgOffset={2}>
                        <img className="img-responsive" id="title-img" src={title} alt="title"/>
                        <h4 id="hero-tagline">Connecting students and industry in blockchain</h4>
                        <Link to="speaker-previews" smooth={true} className="btn btn-hero">Learn More</Link>
                        <a href="https://www.eventbrite.com/e/uw-blockchain-expo-tickets-47000447604" className="btn btn-hero btn-purple">Get Tickets</a>
                    </Col>
                </Row>
                <Row className="hero-bottom">
                    <Col lg={6} lgOffset={6}>
                        <h1 className="hero-bottom-title">About the Expo</h1>
                        <h4 className="hero-bottom-text">
                        The UW Blockchain Society seeks to connect industry and students interested in 
                        blockchain technology. The UW Blockchain Expo will feature speakers, workshops, 
                        and panels from companies and individuals involved in the blockchain space. They 
                        will share their experiences, insights, and the projects they are working on.
                        </h4>
                        <a href="#" className="btn btn-hero">CONTACT US</a>
                    </Col>
                </Row>
                
            </Grid>
        </div>
    </div>
)

export default Hero;