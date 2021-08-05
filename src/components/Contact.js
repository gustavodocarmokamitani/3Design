import React from 'react';
import './Contact.scss';
import { Row, Col, Container } from 'react-bootstrap';
import image3 from '../image/image3.png';

import Btn from './Btn';


const Contact = () => {
    return (
        <Container>
            <Row className='Contato' id='Contact'>
                <Col>
                    <div className='Content-Contact'>
                        <h1>Title</h1>
                        <p>Faça sua empresa brilhar online com um site 3D personalizado, projetado especialmente para você por um designer profissional. </p>
                        <p> Precisa de ideias? Coletamos alguns exemplos incríveis de sites 3D de nossa comunidade global de designers. Inspire-se e comece a planejar o design da web 3D perfeito hoje mesmo.
                        </p>

                        <div className='Btn-Image'>
                            <Btn><a href=''><span>Contato</span></a></Btn>
                        </div>
                    </div>
                </Col>
                <Col>
                    <img className='Image-Contact px-3' src={image3}></img>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;