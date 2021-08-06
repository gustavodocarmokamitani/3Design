import React from 'react';
import './Contact.scss';
import { Row, Col, Container } from 'react-bootstrap';
import image3 from '../image/image3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import Btn from './Btn';


const Contact = () => {
    return (
        <Container>
            <Row className='Contato' id='Contact'>
                <Col lg={6} xs={12}>
                    <div className='Content-Contact'>
                        <h1>Gustavo Kamitani </h1>
                        <p><FontAwesomeIcon className='Heart-Card' icon={faMobileAlt} color="#000" size="1.2x"></FontAwesomeIcon> <span className='mx-2'>(11) 98692-7887</span> </p>
                        <p><FontAwesomeIcon className='Heart-Card' icon={faEnvelope} color="#000" size="1x"></FontAwesomeIcon> <span className='mx-2'>gustavodocarmokamitani@gmail.com</span> </p>
                        <p><FontAwesomeIcon className='Heart-Card' icon={faInstagram} color="#000" size="1x"></FontAwesomeIcon> <span className='mx-2'>gustavocarmok</span> </p>
                        
                        <div className='Btn-Image'>
                            <Btn><a href='https://mywhats.net/gustavokamitani' target="_blank"><span>Contato</span></a></Btn>
                        </div>
                    </div>
                </Col>
                <Col lg={6} xs={12}>
                    <img className='Image-Contact px-3' src={image3}></img>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;